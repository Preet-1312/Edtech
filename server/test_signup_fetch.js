async function testSignup() {
    try {
        const response = await fetch('http://localhost:4000/api/v1/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: "Test",
                lastName: "Instructor",
                email: "test@example.com", // This email has an OTP in DB from earlier test
                password: "Password123",
                confirmPassword: "Password123",
                accountType: "Instructor",
                otp: "123456"
            })
        });

        const data = await response.json();
        console.log("Status:", response.status);
        console.log("Data:", data);
    } catch (err) {
        console.error("Fetch Error:", err);
    }
}
testSignup();
