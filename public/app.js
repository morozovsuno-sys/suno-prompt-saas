async function generate() const contact = localStorage.getItem("user") || "guest"

const res = await fetch("/api/generate",{
 method:"POST",
 headers:{ "Content-Type":"application/json" },
 body: JSON.stringify({contact})
})

const data = await res.json()

if(data.paywall){
 alert("Free limit reached")
 return
}
{

  const contact = document.getElementById("contact").value;

  if (!contact) {
    alert("Enter email or telegram");
    return;
  }

  const res = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ contact })
  });

  const data = await res.json();

  if (data.paywall) {
    alert("Free limit reached (5). Please subscribe.");
    return;
  }

  document.getElementById("result").innerText = data.prompt;

}
