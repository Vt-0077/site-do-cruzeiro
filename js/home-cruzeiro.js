var banners = ["img/destaque-cruzeiro.jpg", "img/destaque-cruzeiro-2.jpg"];
var bannerAtual = 0;
function trocaBanner() {
bannerAtual = (bannerAtual + 1) % 2;
document.querySelector('.destaque img').src = banners[bannerAtual];
}
setInterval(trocaBanner, 4000);
	$('.novidades').addClass('painel-compacto');
	$('.novidades	button').click(function() {
					$('.novidades').removeClass('painel-compacto');
	});
	$('.mais-vendidos').addClass('painel-compacto');
	$('.mais-vendidos	button').click(function() {
					$('.mais-vendidos').removeClass('painel-compacto');
	});