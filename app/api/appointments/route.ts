import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const appointmentData = await request.json()

    // Validate required fields
    const requiredFields = ["parentName", "childName", "email", "phone", "appointmentType"]
    for (const field of requiredFields) {
      if (!appointmentData[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Format the appointment data for WhatsApp message
    const whatsappMessage = formatWhatsAppMessage(appointmentData)

    // Send WhatsApp notification
    await sendWhatsAppNotification(whatsappMessage)

    // Here you would typically save to database
    // await saveAppointmentToDatabase(appointmentData)

    return NextResponse.json(
      {
        success: true,
        message: "Appointment request received successfully!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing appointment:", error)
    return NextResponse.json({ error: "Failed to process appointment request" }, { status: 500 })
  }
}

function formatWhatsAppMessage(data: any): string {
  const { parentName, childName, childAge, email, phone, appointmentType, preferredDate, preferredTime, message } = data

  return `🏥 *NEW APPOINTMENT REQUEST* 🏥

👨‍👩‍👧‍👦 *Family Details:*
• Parent: ${parentName}
• Child: ${childName}${childAge ? ` (${childAge})` : ""}

📞 *Contact Info:*
• Email: ${email}
• Phone: ${phone}

🩺 *Appointment Details:*
• Type: ${appointmentType}
• Preferred Date: ${preferredDate || "Flexible"}
• Preferred Time: ${preferredTime || "Any time"}

💬 *Special Notes:*
${message || "None provided"}

⏰ *Requested at:* ${new Date().toLocaleString()}

Please contact the family within 24 hours to confirm! 🌟`
}

async function sendWhatsAppNotification(message: string) {
  // Replace with your WhatsApp Business API credentials
  const WHATSAPP_API_URL = process.env.WHATSAPP_API_URL
  const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN
  const ADMIN_PHONE_NUMBER = process.env.ADMIN_PHONE_NUMBER // Admin's WhatsApp number

  if (!WHATSAPP_API_URL || !WHATSAPP_ACCESS_TOKEN || !ADMIN_PHONE_NUMBER) {
    console.log("WhatsApp credentials not configured, skipping notification")
    console.log("Message would have been:", message)
    return
  }

  try {
    const response = await fetch(`${WHATSAPP_API_URL}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: ADMIN_PHONE_NUMBER,
        type: "text",
        text: {
          body: message,
        },
      }),
    })

    if (!response.ok) {
      throw new Error(`WhatsApp API error: ${response.statusText}`)
    }

    console.log("WhatsApp notification sent successfully")
  } catch (error) {
    console.error("Failed to send WhatsApp notification:", error)
    // Don't throw error - appointment should still be processed even if notification fails
  }
}
