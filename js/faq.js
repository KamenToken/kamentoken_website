/**
 * Created by kgugec on 15-Sep-17.
 */
$(".faq-block").click( function () {
  var container = $(this);
  var answer = container.find(".faq-answer");
  var trigger = container.find(".faq-plus");

  answer.slideToggle(200);

  if (trigger.hasClass("faq-expand")) {
    trigger.removeClass("faq-expand");
  }
  else {
    trigger.addClass("faq-expand");
  }
});