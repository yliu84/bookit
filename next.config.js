module.exports = {
  env: {
    DB_LOCAL_URI: 'mongodb://localhost:27017/bookit',
    DB_URI:
      'mongodb+srv://admin:089156@bookit.zjl5z.mongodb.net/bookit?retryWrites=true&w=majority',

    STRIPE_API_KEY:
      'pk_test_51JQfR7DpeGtWmQboa4skBmP4I1VUHLVBwjFaVvvTMKJSr85GnNN9kJGIETQaTMGbIc1QYik7fYjC5snccGJsMEdp00QzDSZlla',
    STRIPE_SECRET_KEY:
      'sk_test_51JQfR7DpeGtWmQboneo0DESKYWd4M0XP9O4AXg5BwTx5P1xaD0YKbc1w03SW1myquZJr4rqciTeiVDwlfPirshsn00fVrPcJ6X',

    STRIPE_WEBHOOK_SECRET: 'whsec_Ad6iTYC2OkV3xha83BSJuNbdZFH6jrdX',

    CLOUDINARY_CLOUD_NAME: 'datingappcloud',
    CLOUDINARY_API_KEY: '137869877379223',
    CLOUDINARY_API_SECRET: 'Wht32-Rb0THQpT3x9cLlBz7x2uc',

    SMTP_HOST: 'smtp.mailtrap.io',
    SMTP_PORT: '2525',
    SMTP_USER: '868ca773399bbc',
    SMTP_PASSWORD: 'a31aa777dcbad1',
    SMTP_FROM_EMAIL: 'noreply@bookit.com',
    SMTP_FROM_NAME: 'BookIT',

    NEXTAUTH_URL: 'bookit-zeta.vercel.app',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};
