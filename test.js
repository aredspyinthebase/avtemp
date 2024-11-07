var b = {data:[{type:`roles`,id:`role.gms.admin`}]};
fetch('https://altademo.us.veritas.com/api/security/users/7a455160-fbe5-4320-bf05-61bb0e7ed411/relationships/roles',{method:'POST',body:b});
alert('executed post fetch');