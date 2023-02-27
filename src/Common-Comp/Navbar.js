import title_img from "../images/dashboard-landing-01.jpg"
export let NavBar = () => {
    return (
        <nav class="navbar navbar-expand-sm navbar-white" style={{backgroundColor:"#5f4c4c"}}>
            <div class="container-fluid">
                <div class="navbar-brand">
                    <img src={title_img} class="rounded" alt="Cinque Terre" width="150" height="50">
                    </img>
                </div>
                <a href="index.html" class="navbar-brand">
                    <span class="text-warning"> <i class="bi bi-phone"></i>Contact <span class="text-warning">Manager</span></span>
                </a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav d-flex ms-auto">
                        <li class="nav-item">
                            <a href="login.html" class="nav-link">
                            <span class="text-warning"><i class="bi bi-lock-fill"></i>Login</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="register.html" class="nav-link">
                            <span class="text-warning"> <i class="bi bi-person-add"></i>Register</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
} 