const development = {
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'blahsomething',
    db: 'codeial_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,

        auth: {
            user: 'ssayan.student@gmail.com',
            pass: ''
        }
    },
    google_client_id: "36815387300-ui0j8e4ln3057q52scv2an8i5asu1k13.apps.googleusercontent.com",
    google_client_secret: "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",
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",

}

const production = {
    name: 'production'
}




module.exports = development;