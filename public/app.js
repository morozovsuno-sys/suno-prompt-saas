async function generate(){

 const contact = document.getElementById("contact").value

 const res = await fetch("/api/generate",{
  method:"POST",
  headers:{ "Content-Type":"application/json" },
  body: JSON.stringify({contact})
 })

 const data = await res.json()

 if(data.paywall){
  alert("You used 5 free prompts today. Upgrade to PRO.")
  return
 }

 document.getElementById("result").innerText = data.prompt

}
