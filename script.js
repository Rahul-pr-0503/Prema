document.getElementById("soilForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const soilData = {
        pH: parseFloat(document.getElementById("ph").value),
        N: parseFloat(document.getElementById("nitrogen").value),
        P: parseFloat(document.getElementById("phosphorus").value),
        K: parseFloat(document.getElementById("potassium").value),
        moisture: parseFloat(document.getElementById("moisture").value)
    };
    
    try {
        const response = await fetch("http://127.0.0.1:5000/recommend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(soilData)
        });
        
        const result = await response.json();
        document.getElementById("result").innerText = "Recommended Fertilizer: " + result.recommended_fertilizer;
    } catch (error) {
        console.error("Error fetching recommendation:", error);
        document.getElementById("result").innerText = "Error fetching recommendation. Please try again.";
    }
});
