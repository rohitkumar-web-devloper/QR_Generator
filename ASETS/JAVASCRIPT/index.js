$inputvalue = $(".inputvalue");
$btn = $('.btn');
$heading = $(".qrcode h5");
$qr_img = $(".qrcode img");

$(document).ready(()=>{
  $($btn).click(()=>{
   let inputvalue = $inputvalue.val();
   console.log(inputvalue);
    $heading.css("display","none");
    let api = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputvalue}`;
    $qr_img.attr("src",`${api}`);
   $inputvalue.val("");
  })
})

