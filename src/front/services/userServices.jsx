const userServices = {}
const backendUrl = import.meta.env.VITE_BACKEND_URL

userServices.register = async (formData) => {
    try {
        const resp = await fetch(backendUrl + "/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const text = await resp.text();
        if (!resp.ok) {
            console.error("Backend error", text);
            throw new Error(text);
        }
        const data = JSON.parse(text);

        return data;
    } catch (error) {
        console.error("Register service error:", error.message);
        throw error;
    }
};

userServices.getUserInfo = async () => {
    try {
        const resp = await fetch(backendUrl + "/api/private", {
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
        });
        const text = await resp.text();
        if (!resp.ok) {
            console.error("Backend error", text);
            throw new Error(text);
        }
        const data = JSON.parse(text);
        console.log(data);
        return data;
    } catch (error) {
        console.error("getUserInfo error:", error.message);
        throw error;
    }
};

userServices.login = async (formData) => {
    try {
        const resp = await fetch(backendUrl + "/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const text = await resp.text();
        const data = JSON.parse(text);
        if (!resp.ok) {
            console.error("Backend error", text);
            throw new Error(data.error || "Login failed");
        }
        localStorage.setItem("token", data.token)
        return data;
    } catch (error) {
        console.error("Register service error:", error.message);
        throw error;
    }
};



export default userServices