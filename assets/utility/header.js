class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `    <nav class="navbar navbar-default navbar-mobile navbar-fixed light bootsnav">
    <div class="container">

        <!-- Start Logo Header Navigation -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand" href="home.html">
                <h5>Uchita Online Tool</h5>
            </a>

        </div>
        <!-- End Logo Header Navigation -->

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-menu">

            <ul class="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
                <li class="dropdown">
                    <a href="home.html" class="" data-toggle="dropdown">Home</a>


                </li>
            </ul>



            <ul class="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
                <li class="dropdown">
                    <a href="about.html" class="" data-toggle="dropdown">About US</a>


                </li>
            </ul>
            <ul class="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
                <li class="dropdown">

                    <a href="privacy.html" data-toggle="dropdown">Privacy Policy</a>

                </li>
            </ul>
            <ul class="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
                <li class="dropdown">

                    <a href="termscondition.html" data-toggle="dropdown">Terms and Conditions</a>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
                <li class="dropdown">

                    <a href="contactus.html" data-toggle="dropdown">Contact Us</a>

                </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
                <li class="sign-up"><a class="btn-signup red-btn" href="#"><span></span>
                        Free Online Tool</a></li>
                <br>
            </ul>

        </div>
        <!-- /.navbar-collapse -->
    </div>

</nav>

      `;
  }
}

customElements.define("header-component", Header);
