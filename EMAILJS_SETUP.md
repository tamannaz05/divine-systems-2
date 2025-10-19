# EmailJS Setup Guide for Contact Form

## Overview
The contact form is integrated with EmailJS, a service that allows you to send emails directly from JavaScript without a backend server.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's free!)
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in the EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other SMTP service
4. Follow the connection steps for your provider
5. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact from {{user_name}}

From: {{user_name}}
Email: {{user_email}}
Phone: {{user_phone}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your Divine Systems contact form.
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_AbCdEfGhIj`)
3. Copy it

### Step 5: Update the Code
Open `src/components/Contact.jsx` and replace the placeholders (lines 28-30):

```javascript
// BEFORE (placeholder values)
const serviceId = 'YOUR_SERVICE_ID'
const templateId = 'YOUR_TEMPLATE_ID'
const publicKey = 'YOUR_PUBLIC_KEY'

// AFTER (your actual values)
const serviceId = 'service_abc123'      // Your Service ID
const templateId = 'template_xyz789'    // Your Template ID
const publicKey = 'user_AbCdEfGhIj'     // Your Public Key
```

### Step 6: Test It!
```bash
npm run dev
```

1. Navigate to the Contact section
2. Fill out the form
3. Click "Send Message"
4. Check your email inbox!

---

## 📋 Detailed Configuration

### EmailJS Template Variables

The form sends these variables to EmailJS:

| Variable | Form Field | Required | Description |
|----------|------------|----------|-------------|
| `user_name` | Full Name | ✅ Yes | Sender's name |
| `user_email` | Email Address | ✅ Yes | Sender's email |
| `user_phone` | Phone Number | ❌ No | Sender's phone |
| `subject` | Subject | ✅ Yes | Message subject |
| `message` | Message | ✅ Yes | Message content |

### Template Examples

#### Basic Template
```
New message from {{user_name}}

Email: {{user_email}}
Phone: {{user_phone}}
Subject: {{subject}}

Message:
{{message}}
```

#### Professional Template
```html
<!DOCTYPE html>
<html>
<body>
  <h2>New Contact Form Submission</h2>
  <p><strong>From:</strong> {{user_name}}</p>
  <p><strong>Email:</strong> {{user_email}}</p>
  <p><strong>Phone:</strong> {{user_phone}}</p>
  <p><strong>Subject:</strong> {{subject}}</p>

  <h3>Message:</h3>
  <p>{{message}}</p>

  <hr>
  <small>Sent from Divine Systems Contact Form</small>
</body>
</html>
```

#### Auto-Reply Template (optional)
Create a second template for auto-replies:

```
Hi {{user_name}},

Thank you for contacting Divine Systems! We received your message about "{{subject}}" and will get back to you within 24 hours.

Your message:
{{message}}

Best regards,
Divine Systems Team

---
This is an automated response. Please do not reply to this email.
```

---

## 🔧 Advanced Configuration

### Environment Variables (Recommended for Production)

Instead of hardcoding credentials, use environment variables:

1. Create `.env` file in project root:
```bash
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_AbCdEfGhIj
```

2. Update `Contact.jsx`:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
```

3. Add `.env` to `.gitignore`:
```bash
echo ".env" >> .gitignore
```

### Rate Limiting

EmailJS free tier includes:
- ✅ 200 emails/month
- ✅ Unlimited templates
- ✅ Unlimited services

For higher limits, check [EmailJS Pricing](https://www.emailjs.com/pricing/)

### Spam Protection

Add reCAPTCHA (optional):

1. Get reCAPTCHA keys from [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Install package:
```bash
npm install react-google-recaptcha
```
3. Update Contact.jsx to include reCAPTCHA verification

---

## 🎨 Customization

### Change Form Fields

To add/remove fields, update both:

1. **State in Contact.jsx:**
```javascript
const [formData, setFormData] = useState({
  user_name: '',
  user_email: '',
  // Add your field here
  company_name: '',
})
```

2. **JSX in Contact.jsx:**
```jsx
<div className="form-group">
  <label htmlFor="company_name">Company Name</label>
  <input
    type="text"
    id="company_name"
    name="company_name"
    value={formData.company_name}
    onChange={handleChange}
    placeholder="Your Company"
  />
</div>
```

3. **EmailJS Template:**
```
Company: {{company_name}}
```

### Styling

All contact form styles are in `src/style.css` starting at line 799:
- `.contact-content` - Layout grid
- `.contact-form` - Form styling
- `.submit-button` - Button styling
- `.form-status` - Success/error messages

---

## 🐛 Troubleshooting

### Issue: Emails not sending

**Check:**
1. ✅ Service ID is correct
2. ✅ Template ID is correct
3. ✅ Public Key is correct
4. ✅ Email service is connected in EmailJS dashboard
5. ✅ Check browser console for errors

**Common Error:**
```
Error: The public key is invalid
```
**Solution:** Double-check your Public Key from Account → General

### Issue: Form submits but no email received

**Check:**
1. ✅ Template variable names match form fields
2. ✅ Email service has correct "To" email configured
3. ✅ Check spam folder
4. ✅ Verify email service status in EmailJS dashboard

### Issue: CORS errors

**Solution:** EmailJS should work without CORS issues. If you see CORS errors:
1. Make sure you're using the latest @emailjs/browser package
2. Verify your public key is from the correct EmailJS account

---

## 📊 Email Analytics

EmailJS Dashboard provides:
- Total emails sent
- Success/failure rate
- Email delivery status
- Monthly usage

Access at: [EmailJS Dashboard](https://dashboard.emailjs.com/)

---

## 🔒 Security Best Practices

### Do:
✅ Use environment variables for credentials
✅ Add rate limiting (EmailJS has built-in limits)
✅ Validate form inputs on frontend
✅ Keep your EmailJS account secure

### Don't:
❌ Commit .env files to Git
❌ Share your Public Key publicly (it's in the code, so it's semi-public)
❌ Use EmailJS for sensitive data (it's client-side)

### Note on Security:
EmailJS Public Keys are meant to be public - they're safe to include in frontend code. However, EmailJS has rate limiting and security features to prevent abuse.

---

## 🚀 Deployment

### Vercel
Add environment variables in Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

### Netlify
Add in `netlify.toml`:
```toml
[build.environment]
  VITE_EMAILJS_SERVICE_ID = "service_abc123"
  VITE_EMAILJS_TEMPLATE_ID = "template_xyz789"
  VITE_EMAILJS_PUBLIC_KEY = "user_AbCdEfGhIj"
```

Or add in Netlify Dashboard → Site Settings → Environment Variables

---

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Example](https://www.emailjs.com/docs/examples/reactjs/)
- [EmailJS Support](https://www.emailjs.com/docs/faq/)

---

## ✅ Testing Checklist

Before going live:

- [ ] EmailJS account created and verified
- [ ] Email service connected
- [ ] Email template created with correct variables
- [ ] Credentials updated in code
- [ ] Form submits successfully in development
- [ ] Test email received in inbox
- [ ] Error handling works (try with invalid email)
- [ ] Success message displays correctly
- [ ] Form clears after successful submission
- [ ] Responsive design tested on mobile
- [ ] Production build works (`npm run build`)

---

## 💡 Tips

1. **Test with your personal email first** - Send a test to yourself before sharing
2. **Set up auto-reply** - Create a second template for automatic responses
3. **Monitor usage** - Check EmailJS dashboard regularly for email quotas
4. **Backup email** - Add a secondary email address in EmailJS settings
5. **Custom domain** - EmailJS supports sending from custom domains (paid plans)

---

**Need help?** Check the [EmailJS Docs](https://www.emailjs.com/docs/) or open an issue in this repo!
