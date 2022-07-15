var data=[
    {
        firstname:"Sunny",
        middlename:"NA",
        lastname:"Tyagi",
        email:"sunny.tyagi@sourcefuse.com",
        phone:"6396786017",
        role:"Web-Apps Trainee",
        address:"Ghaziabad",
        id:1
    },
    {
        firstname:"Deepak",
        middlename:"NA",
        lastname:"Kumar",
        email:"deepak.kumar@sourcefuse.com",
        phone:"8559010326",
        role:"Snr. Tech. Head",
        address:"Mohali",
        id:2
    },
    {
        firstname:"Meghna",
        middlename:"NA",
        lastname:"kashyap",
        email:"meghna.kashyap@sourcefuse.com",
        phone:"7834086997",
        role:"HR Recruiter",
        address:"Mohali",
        id:3
    },{
        firstname:"Samarpan",
        middlename:"NA",
        lastname:"Bhattacharya",
        email:"samarpan.bhattacharya@sourcefuse.com",
        phone:"9999909854",
        role:"Principal Architect",
        address:"Mohali",
        id:4
    },
    {
        firstname:"Shanu",
        middlename:"NA",
        lastname:"Tyagi",
        email:"k.kumar@sourcefuse.com",
        phone:"9773649995",
        role:"Snr. Tech. Head",
        address:"Mohali",
        id:5
    }
]

function loaddata() {
    let table=document.getElementById("datatable");
    let rowcount=table.rows.length;
    let colcount=table.rows[0].cells.length;

    for(var i=0;i<data.length;i++){
        if(data[i]){
            var row=table.insertRow(rowcount);
            var cellnum=0;
            for(var j in data[i]){
                if(cellnum!=7){
                    var cell=row.insertCell(cellnum);
                    cell.innerHTML=`<p class=\"info-row-${row.rowIndex}\">${data[i][j]}</p>
                                    <input type="text" class=\"edit-info-row-${row.rowIndex}\" name=\"${j}\" style="display:none" value=\"${data[i][j]}\">`;
                    cellnum+=1;

                }
                else{
                    
                    var actioncell=row.insertCell(cellnum);
                    actioncell.innerHTML=`
                                        <div id=\"normal-action-${row.rowIndex}\">
                                            <button id=\"del-row-${data[i][j]}\" onclick=\"deleterow(${data[i][j]})\">del</button>
                                            <button id=\"edit-row-${data[i][j]}\" onclick=\"editrow(${row.rowIndex})\">edit</button>
                                        </div>
                                        <div id=\"edit-action-${row.rowIndex}\" style=\"display:none\">
                                            <button id=\"save-row-${data[i][j]}\" onclick=\"save(${row.rowIndex},${data[i][j]})\">save</button>
                                            <button id=\"cancel-row-${data[i][j]}\" onclick=\"cancel(${row.rowIndex})\">cancel</button>
                                        </div>
                                        `;  
                }
                
            }

            rowcount++;
        }
        
        
    }
    document.getElementById('reload').style.display="inline";
    document.getElementById('load').style.display="none";
    
}

function save(n,di){        //di- data index
    console.log("n",n);
    // console.log(data);
    var myinput=document.getElementsByClassName(`edit-info-row-${n}`);
    for(var i=0;i<myinput.length;i++){
        var myname=myinput[i].name;
        data[di-1][myname]=myinput[i].value;
    }
    console.log("data",data);
    reloaddata();
    // console.log(myinput[0].name);
    console.log("di",di);
    // data[di-1].firstname=myinput[0].value;
}

function cancel(n){
    console.log("n",n);
    var myinput=document.getElementsByClassName(`edit-info-row-${n}`);
    var myinfo=document.getElementsByClassName(`info-row-${n}`);
    // console.log("myinfo",myinfo);
    // console.log("n",n);
    // console.log("myinput",myinput);
    for(var i=0;i<myinput.length;i++){
        myinput[i].style.display="none";
        myinfo[i].style.display="inline";
    }
    document.getElementById(`normal-action-${n}`).style.display="inline";
    document.getElementById(`edit-action-${n}`).style.display="none";
}

function editrow(n) {
    var myinput=document.getElementsByClassName(`edit-info-row-${n}`);
    var myinfo=document.getElementsByClassName(`info-row-${n}`);
    console.log("myinfo",myinfo);
    console.log("n",n);
    console.log("myinput",myinput);
    for(var i=0;i<myinput.length;i++){
        myinput[i].style.display="inline";
        myinfo[i].style.display="none";
    }
    document.getElementById(`normal-action-${n}`).style.display="none";
    document.getElementById(`edit-action-${n}`).style.display="inline";
    // document.getElementById()
}

function deleterow(n) {
    var table=document.getElementById('datatable');
    delete data[n-1];
    console.log("n",n);
    console.log("table",table.rows);
    console.log("data",data);
    reloaddata();
}

function reloaddata() {
    // alert("Hii, Say hello to Tyagi ji");
    let table=document.getElementById("datatable");
    var rowcount=table.rows.length;
    for(var i=1;i<rowcount;i++){
        table.deleteRow(1);
    }
    loaddata();
}