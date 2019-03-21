



$(document).ready(function(){
  $("form#stress_quiz").submit(function(event){
    event.preventDefault();
    $("#warning-responses").show();
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var warningSigns = $(this).val();
      $('#warning-responses').append(warningSigns + "<br>");
    });

    $("#health-responses").show();
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var healthSymptoms = $(this).val();
      $('#health-responses').append(healthSymptoms + "<br>");
    });

    $("#coping-responses").show();
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var copingMethods = $(this).val();
      $('#coping-responses').append(copingMethods + "<br>");
    });

    $('#stress_quiz').hide();
  });
});
