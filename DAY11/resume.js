//Name
let name=document.createElement("h1")
name.innerText="Nagadeepthi Veerlapati"
 name.style.textAlign="center"
document.body.appendChild(name)
console.log(name);


//phno & email
let phn=document.createElement("p")
phn.innerHTML="<b>"+"Moblie: "+"</b>"+"8125505016"+"  "+  "<b>"+ " Email:" +"</b>"+" veerlapatinagadeepthi212@gmail.com"
phn.style.textAlign="center"
document.body.appendChild(phn)
console.log(phn);
   

let linkedin=document.createElement("p")
linkedin.innerHTML="<b>"+"LinkedIn:"+"</b>"+" https://www.linkedin.com/in/nagadeepthi-veerlapati-bb9188244/"
linkedin.style.textAlign="center"
document.body.appendChild(linkedin)
console.log(linkedin);


let github=document.createElement("p")
github.innerHTML="<b>"+"GitHub: "+"</b>"+"GitHub: https://github.com/VeerlapatiNagadeepthi02"
github.style.textAlign="center"
document.body.appendChild(github)
console.log(github);


//profile
 let ps=document.createElement("h3")
 ps.innerHTML="PROFILE SUMMARY"+"<hr>"
ps.style.textAlign="left"
 document.body.appendChild(ps)
 console.log(ps);

 //summary
 let ss=document.createElement("P")
 ss.innerHTML="As a recent IT graduate with a strong foundation in programming and problem-solving, I am enthusiastic about embarking on a career in the tech industry. My academic background, and personal projects, has equipped me with proficiency in languages, working with frontend. I bring excellent communication skills that enable me to convey technical concepts clearly and collaborate effectively with team members I am eager to contribute my technical skills, adaptability, and passion for innovation to a dynamic team and play a part in solving complex challenges in the world of IT industry. "+"<br>"
 document.body.appendChild(ss)
 console.log(ss);
 


 //Education
 let Education=document.createElement("h3")
 Education.innerHTML="EDUCATION"+"<hr>"
Education.style.textAlign="left"
 document.body.appendChild(Education)
 console.log(Education);

 //education details

 let Educationd=document.createElement("p")
 Educationd.innerHTML="<b>"+"Bachelor of Technology in Computer Science & Engineering"+"</b>"
Educationd.style.textAlign="left"
 document.body.appendChild(Educationd)
 console.log(Educationd);



 //passing year
 let py=document.createElement("h4")
 py.innerHTML="<b>"+"2019-2023"+"</b>"
 py.style.textAlign="right"
 py.style.marginTop="-45px"
 py.style.marginRight="20px"
 document.body.appendChild(py)
 console.log(py);

 //college name
 let cn=document.createElement("p")
 cn.innerHTML="Vignan’s Foundation For Science Technology & Research, Percentage : 7.9 CGPA"+"<br>"+"<br>"
 cn.style.textAlign="left"
 document.body.appendChild(cn)
 console.log(cn);



//technical skills heading

let ts=document.createElement("h3")
 ts.innerHTML="TECHNICAL SKILLS"+"<hr>"
 ts.style.textAlign="left"
 document.body.appendChild(ts)
 console.log(ts);   
 
 
//skills

let skills=document.createElement("ul")
let li1=document.createElement("li")
let li2=document.createElement("li")
let li3=document.createElement("li")
li1.innerHTML="<b>"+"Front End Technologies :"+"</b>"+"HTML , CSS, Java Script"
li2.innerHTML="<b>"+"Backend Technologies :"+"</b>"+"C, Python"
li3.innerHTML="<b>"+"Database :"+"</b>"+"Mysql"
skills.append(li1,li2,li3);
document.body.append(skills)



//soft skills heading

let sskills=document.createElement("h3")
 sskills.innerHTML="SOFT SKILLS"+"<hr>"
 sskills.style.textAlign="left"
 document.body.appendChild(sskills)
 console.log(sskills);   
 
 
//skills

let skill=document.createElement("ul")
let li4=document.createElement("li")
let li5=document.createElement("li")
let li6=document.createElement("li")
li4.innerHTML="Communication "
li5.innerHTML="Multi-tasker "
li6.innerHTML="Time management"+"<br>"
skill.append(li4,li5,li6);
document.body.append(skill)



//project heading

let ph=document.createElement("h3")
ph.innerHTML="PROJECTS"+"<hr>"
ph.style.textAlign="left"
document.body.appendChild(ph)
console.log(ph);
//prog sub heading2

let subHeading2=document.createElement("h4")
 subHeading2.innerHTML=" Facial Expression Recognition "
subHeading2.style.marginLeft="5%"
 document.body.appendChild(subHeading2)
 console.log(subHeading2);

 //project summary

 let pro2=document.createElement("ul")
let li10=document.createElement("li")
let li11=document.createElement("li")
let li12=document.createElement("li")
li10.innerHTML="A Machine Learning Model which predicts the facial expression recognition based on different features.  "
li11.innerHTML="Using this model we can get better accuracy on price prediction with less error rate."
li12.innerHTML="Facial expression Recognition is trained by using CNN Algorithm to get better Accuracy on all features. "
pro2.append(li10,li11,li12);
pro2.style.marginLeft="10%"
document.body.append(pro2)


 //prog sub heading

 let subHeading=document.createElement("h4")
 subHeading.innerHTML=" Alcohol Detection With Vehicle Engine Locking System  "
subHeading.style.marginLeft="5%"
 document.body.appendChild(subHeading)
 console.log(subHeading);

 //project summary

 let pro=document.createElement("ul")
let li7=document.createElement("li")
let li8=document.createElement("li")
let li9=document.createElement("li")
li7.innerHTML="we propose a solution by designing a system which detects the alcohol. "
li8.innerHTML="In this project we use IOT components."
li9.innerHTML="when certain quantity is detected, the microcontroller stops the engine of the vehicle and the message containing and send to guardian of a person.  "
pro.append(li7,li8,li9);
pro.style.marginLeft="10%"
document.body.append(pro)


//achivments

let achivements=document.createElement("h3")
 achivements.innerHTML="ACHIEVEMENTS"+"<hr>"
 achivements.style.textAlign="left"
 document.body.appendChild(achivements)
 console.log(achivements); 


//achi list

let al=document.createElement("ul")
let li13=document.createElement("li")
let li14=document.createElement("li")

li13.innerHTML=" 4 star Rating at Hacker rank "
li14.innerHTML=" NPTEL Certified(Elite)in Programming through C++. "

al.append(li13,li14);

document.body.append(al)

//CERTIFICATIONS
let cert=document.createElement("h3")
 cert.innerHTML="CERTIFICATIONS"+"<hr>"
 achivements.style.textAlign="left"
 document.body.appendChild(cert)
 console.log(cert); 

//CERT list

let cl=document.createElement("ul")
let li15=document.createElement("li")

li15.innerHTML=" 4 star Rating at Hacker rank "


cl.append(li15);

document.body.append(cl)





