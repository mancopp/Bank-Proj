<?php
// Include the database configuration file  
require_once 'dbConfig.php';

// Get image data from database 
$result = $db->query("SELECT image FROM images ORDER BY id DESC");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=devie-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Custom card - Create your own design!</title>
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <div class="bg">
        <div class="curve"></div>
    </div>
    <section class="main-block" id="home">
        <div class="container">
            <header>
                <a href="#" class="logo">Custom Card</a>
                <ul>
                    <li><a href="#home" class="active">Home</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#custom">Custom design</a></li>
                    <li><a href="#partners">Our partners</a></li>
                </ul>
            </header>
            <div class="content">
                <h2>Create you own design</h2>
                <p>
                    You can create your own design or you can choose design
                    of your debit or credit card from our gallery
                </p>
                <a href="#custom">Read more</a>
            </div>
            <div class="card">
                <img src="./image/card_data.png" />
            </div>
            <ul class="sci">
                <li>
                    <a target="_blank" href="https://instagram.com"><img src="image/instagram.png" /></a>
                </li>
                <li>
                    <a target="_blank" href="https://facebook.com"><img src="image/face.png" /></a>
                </li>
                <li>
                    <a target="_blank" href="https://twitter.com"><img src="image/twitter.png" /></a>
                </li>
                <li>
                    <a target="_blank" href="https://telegram.org/"><img src="image/telgram.png" /></a>
                </li>
            </ul>
            <p class="copyrightText">Custom Card. All Right Reserved</p>
        </div>
    </section>
    <section class="gallery-block" id="gallery">
        <div class="card display">
            <img src="./image/card_data.png" />
        </div>
        <div class="container grid">
            <?php if ($result->num_rows > 0) { ?>
                <?php while ($row = $result->fetch_assoc()) { ?>
                    <img class="grid-design" src="data:image/jpg;charset=utf8;base64,<?php echo base64_encode($row['image']); ?>" />
                <?php } ?>
            <?php } else { ?>
                <p class="status error">Image(s) not found...</p>
            <?php } ?>
        </div>
    </section>
    <section class="custom-block" id="custom">
        <div class="header">Upload your own picture!</div>
        <div class="container custom-design">
            <div class="card upload-display">
                <img src="./image/card_data.png" />
            </div>
            <form class="" action="upload.php" method="post" enctype="multipart/form-data">
                <div class="drop-area">
                    <span>Drag and drop your design or click to upload</span>
                    <input type="file" name="image" class="file" accept="image/*" />
                </div>
                <input type="submit" name="submit" class="submit" value="Upload">
            </form>
    </section>
    <section class="partners-block" id="partners">
        <div class="header">Banks where you can get our design</div>
        <div class="pricing__grid">
            <div class="pricing-card">
                <div class="pricing-card__top">
                    <div class="pricing-card__title">AlexBank</div>
                    <div class="pricing-card__price">
                        19.99$<span>/card</span>
                    </div>
                </div>
                <div class="pricing-card__body">
                    <ul class="pricing-card__pluses">
                        <li class="pricing-card__plus"></li>
                        <li class="pricing-card__plus">
                            Various gifts and presents
                        </li>
                        <li class="pricing-card__plus">
                            Invite your friends to get discounts
                        </li>
                        <li class="pricing-card__plus">
                            Credit limits up to 100 000$
                        </li>
                    </ul>
                    <div class="pricing-card__button">
                        <a href="#">Select</a>
                    </div>
                </div>
            </div>
            <div class="pricing-card">
                <div class="pricing-card__top">
                    <div class="pricing-card__title">MarianBank</div>
                    <div class="pricing-card__price">
                        20.99$<span>/card</span>
                    </div>
                </div>
                <div class="pricing-card__body">
                    <ul class="pricing-card__pluses">
                        <li class="pricing-card__plus">Fast print</li>
                        <li class="pricing-card__plus">
                            Bonus program for frequent customers
                        </li>
                        <li class="pricing-card__plus">
                            Printing systems located in every city!
                        </li>
                        <li class="pricing-card__plus">
                            Glitter and gold foil printing
                        </li>
                    </ul>
                    <div class="pricing-card__button">
                        <a href="#">Select</a>
                    </div>
                </div>
            </div>
            <div class="pricing-card">
                <div class="pricing-card__top">
                    <div class="pricing-card__title">PlatinumBank</div>
                    <div class="pricing-card__price">
                        25.99$<span>/card</span>
                    </div>
                </div>
                <div class="pricing-card__body">
                    <ul class="pricing-card__pluses">
                        <li class="pricing-card__plus">Fast print</li>
                        <li class="pricing-card__plus">
                            Free shipping in Europe
                        </li>
                        <li class="pricing-card__plus">
                            Fast delivery (2 work days)
                        </li>
                        <li class="pricing-card__plus">
                            24/7 support team
                        </li>
                    </ul>
                    <div class="pricing-card__button">
                        <a href="#">Select</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <img class="topBtn" src="./image/arrowhead-up.png" />
    <script src="./app.js"></script>
</body>


<?php

$connection = mysqli_connect('localhost', 'root', '050marian');
$db = mysqli_select_db($connection, 'card_design');

$query = " SELECT * FROM pictures ";
$query_run = mysqli_query($connection, $query);

while ($row = mysqli_fetch_array($query_run)) {
}

?>

</html>