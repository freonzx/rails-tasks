// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
$(function(){
  $(document).on("change", "input", function() {
    $.ajax({
    //url: `/tasks/${this.value}/`,
    url: '/tasks/'+this.value+'/',
    type: 'PUT',
    dataType: 'script',
    // data: `task[done]=${this.checked}`,
    data: 'task[done]='+this.checked,
    success: function(data) {
      //alert('Load was performed.');
    }
    })
  })
});
