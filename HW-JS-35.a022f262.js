const e="http://localhost:3000/students",t=async()=>{try{let t=await fetch(e),l=await t.json();document.querySelector("tbody").innerHTML=l.map(e=>{let t=e.skills.join(", ");return`
      <tr id="${e.id}">
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.course}</td>
        <td>${t}</td>
        <td>${e.email}</td>
        <td>${e.isEnrolled}</td>
        <td><button type="button" class="delete-btn">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button></td>
        <td><button type="button" class="update-btn">\u{41E}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{438}</button></td>
      </tr>
    `}).join("")}catch(e){console.log(e)}},l=async(t,l)=>{let n={method:"PATCH",body:JSON.stringify(l),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{return await fetch(`${e}/${t}`,n).then(e=>e.json())}catch(e){console.log(e)}},n=async e=>{let t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{return await fetch("http://localhost:3000/students",t).then(e=>e.json())}catch(e){console.log(e)}},a=async t=>{try{return await fetch(`${e}/${t}`,{method:"DELETE"})}catch(e){console.log(e)}};document.querySelector("#get-students-btn").addEventListener("click",async()=>{await t()});const s=document.querySelector("#add-student-form");s.addEventListener("submit",e=>{e.preventDefault();let l=e.target.elements.name.value,a=e.target.elements.age.value,o=e.target.elements.course.value,r=e.target.elements.skills.value.split(", "),c=e.target.elements.email.value;n({name:l,age:a,course:o,skills:r,email:c,isEnrolled:e.target.elements.isEnrolled.checked}).then(()=>{t(),s.reset()})}),document.querySelector("tbody").addEventListener("click",async e=>{let n=e.target.closest("tr"),s=n?.id;if("Оновити"===e.target.textContent){let e=document.querySelector(".backdrop");if(!e)return void console.warn("Backdrop не знайдено в DOM");e.style.visibility="visible",e.style.display="flex";let n=document.querySelector("#update-student-form");if(!n)return;n.addEventListener("submit",async n=>{n.preventDefault();let a=n.target.elements.nameCollect.value,o=n.target.elements.ageCollect.value,r=n.target.elements.courseCollect.value,c=n.target.elements.skillsCollect.value.split(", "),d=n.target.elements.emailCollect.value,i=n.target.elements.isEnrolledCollect.checked;e.style.visibility="hidden",e.style.display="none";try{await l(s,{name:a,age:o,course:r,skills:c,email:d,isEnrolled:i}),await t()}catch(e){console.error(e)}},{once:!0})}if("Видалити"===e.target.textContent)try{await a(s),await t()}catch(e){console.error(e)}});
//# sourceMappingURL=HW-JS-35.a022f262.js.map
