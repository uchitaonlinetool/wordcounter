class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `   	<!-- ============== Before Footer ====================== -->
	<section class="before-footer bt-1 bb-1">
		<div class="container-fluid padd-0 full-width">

			<div class=" col-md-2 col-sm-2 br-1 mbb-1">
				<div class="data-flex">
					<h4>Contact Us!</h4>
				</div>
			</div>
			<div class="col-md-3 col-sm-3 br-1 mbb-1">
				<div class="data-flex text-center">
					Shahapur, Karnataka - 585223
				</div>
			</div>

			<div class="col-md-3 col-sm-3 br-1 mbb-1">
				<div class="data-flex text-center">
					<a href="mailto:uchitaonlinetools@gmail.com"
						class="theme-cl"><strong>uchitaonlinetools@gmail.com</strong></a>
				</div>
			</div>

			<div class="col-md-4 col-sm-4 padd-0">
				<div class="data-flex padd-0">
					<ul class="social-share">
						<li><a href="#"><i class="fa fa-facebook theme-cl"></i></a></li>
						<li><a href="#"><i class="fa fa-google-plus theme-cl"></i></a></li>
						<li><a href="#"><i class="fa fa-twitter theme-cl"></i></a></li>
						<li><a href="#"><i class="fa fa-linkedin theme-cl"></i></a></li>
					</ul>
				</div>
			</div>

		</div>
	</section>
	<!-- =================== Before Footer ====================== -->

	<!-- ================= footer start ========================= -->
	<footer class=" dark-bg">
		<div class="copyright text-center">
			<p><a target="_blank" href="https://uchitaonlinetool.com/"> Copyright ©
					2023 by Uchita Online Tool</a></p>
		</div>
	</footer>

      `;
  }
}

customElements.define("footer-component", Footer);
