



$(document).ready(function(){
  $("form#stress_quiz").submit(function(event){
    event.preventDefault();

    $("#warning-responses").show();
    var warningCount = 0
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var warningSigns = $(this).val();
      $('#warning-responses').append(warningSigns + "<br>");
      warningCount = warningCount + 1
    });
    if (warningCount === 0) {
      $("#warning-responses").hide();
    }

    $("#health-responses").show();
    var healthCount = 0
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var healthSymptoms = $(this).val();
      $('#health-responses').append(healthSymptoms + "<br>");
      healthCount = healthCount + 1
    });
    if (healthCount === 0) {
      $("#health-responses").hide();
    }

    $("#coping-responses").show();
    var copingCount = 0
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var copingMethods = $(this).val();
      $('#coping-responses').append(copingMethods + "<br>");
      copingCount += 1

    });
    if (copingCount === 0) {
      $("#coping-responses").hide();
    }

    if (warningCount >= 6 && healthCount >= 4) {
      $("#recs1").show();
    } else if (warningCount >=4 && copingCount >=5) {
      $("#recs2").show();
    } else {
      $("#recs3").show();
    }


    $('#stress_quiz').hide();
  });
});
