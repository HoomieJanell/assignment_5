document.querySelector('hour').addEventListener('submit', function (e) {
    const task = document.querySelector('#task').value;

    let tasks

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = localStorage.getItem('tasks');
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    tasks.forEach(function (task) {
        console.log(task)
    }
})

$(document).ready(function () {
    var savesnotesbtn = document.getElementById("submit");

    for (var i = 1; i < 11; i++) {
      $("#note" + i + "input").val(localStorage.getItem("note" + i));
    }

    function saveNotes() {
   
      $("#submit").removeClass("notSaved").addClass("Saved");
      
      for (var i = 1; i < 11; i++) {
        localStorage.setItem("note" + i, $("#note" + i + "input").val());
      }
    };
    submit.addEventListener("click", saveNotes);
});

$("textarea").each(function(){
    $(this).attr("value", $(this).text(this.value));
});

var seven = document.querySelector("#hour-7");

function keepSubmit() {
    var variable = localstorage.getItem("seven");

    seven.textContent = variable;
};

submit.addEventListener("click, function"() {
    variable = seven.Value;
    localStorage.setItem("variable", variable);

}

var timeSeven = $(".hourSeven");

window.onload = function() {
    document.getElementById('submit').value = '';
  }

const commentInput = document.querySelector('#submit');

function appendComment(event) {
    event.preventDefault();

}
submit.addEventListener('click', appendComment, false);

localStorage.setItem("#submit");

console.log("#submit");

document.getElementById("textarea").value = localStorage.getItem("submit");

$('#submit').on('click', function(){

    $('input[type="text"]').each(function(){    
        var id = $(this).attr('textarea');
        var value = $(this).val();
       localStorage.setItem(id, value);

    });   
});

$('#load').on('click', function(){
    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);

        $(this).val(value);

    }); 
});
