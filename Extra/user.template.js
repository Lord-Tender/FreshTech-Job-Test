const passwordResetEmailTemplate = (firstName, Password) => {
    return `
        <!DOCTYPE html>
<html>
<head>
    <style>
        /* No CSS here, will use inline styles */
    </style>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0;">
    <div style="width: 80%; margin: auto; padding: 20px; border: 1px solid #dddddd; border-radius: 5px; background-color: #f9f9f9;">
        <div style="text-align: center; font-size: 8px; background-color: #FF5733; color: white; padding: 10px 0; border-radius: 5px 5px 0 0;">
            <h1>Password Reset</h1>
        </div>
        <div style="margin: 20px 0;">
            <p>Hi ${firstName},</p>
            <p>We received a request to reset your password for your Fresh Tech account. Your new password has been generated and is provided below:</p>
            <p style="font-size: 18px; color: #FF5733;"><strong>${Password}</strong></p>
            <p>For security reasons, we recommend changing this temporary password to one of your choice as soon as possible after logging in. You can do this by following these steps:</p>
            <ul>
                <li>Log in to your account using the new password.</li>
                <li>Navigate to your account settings.</li>
                <li>Select the option to change your password.</li>
                <li>Enter a new password of your choice and save the changes.</li>
            </ul>
            <p>If you did not request a password reset, please contact our support team immediately at emmanuelola971@gmail.com .</p>
            <p>Thank you,<br>The Fresh Tech Team</p>
        </div>
        <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #777777;">
            <p>&copy; 2024 (Fresh Tech). All rights reserved.</p>
            <p>Ogbomoso, Oyo state.</p>
        </div>
    </div>
</body>
</html>

    `
}

module.exports = { passwordResetEmailTemplate }