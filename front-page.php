<!DOCTYPE html>
<html lang="ja">

<head>
    <?php get_header(); ?>
    <!-- <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" /> -->
    <!-- <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" /> -->
    <!-- <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" /> -->

    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/swiper-bundle.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/dist/css/style.css">

    <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>
    <div class="swiper hero-swiper">

        <div class="swiper-wrapper">

            <div class="swiper-slide">
                <figure class="swiper-slide-img-wrapper">
                    <img src="<?php echo get_theme_file_uri('assets/images/gregory-pappas-ncQM0sUOUMw-unsplash.jpg'); ?>">
                </figure><!-- .swiper-slide-img-wrapper -->

                <div class="swiper-slide-body">
                    <h3 class="swiper-slide-title">VISIT<span>ご来店</span></h3>
                    <p class="swiper-slide-text">まずは当店までお気を付けてご来店ください。</p>
                </div><!-- .swiper-slide-body -->
            </div><!-- .swiper-slide -->

            <div class="swiper-slide">
                <figure class="swiper-slide-img-wrapper">
                    <img src="<?php echo get_theme_file_uri('assets/images/steffan-mitchell-gHrgeeCCkYA-unsplash.jpg'); ?>">
                </figure><!-- .swiper-slide-img-wrapper -->

                <div class="swiper-slide-body">
                    <h3 class="swiper-slide-title">ORDER<span>ご注文</span></h3>
                    <p class="swiper-slide-text">レジカウンターにてお好きなメニューを注文します。フードはショーケースにあります。</p>
                </div><!-- .swiper-slide-body -->
            </div><!-- .swiper-slide -->

            <div class="swiper-slide">
                <figure class="swiper-slide-img-wrapper">
                    <img src="<?php echo get_theme_file_uri('assets/images/clay-banks-oNm9NkTFLfA-unsplash.jpg'); ?>">
                </figure><!-- .swiper-slide-img-wrapper -->

                <div class="swiper-slide-body">
                    <h3 class="swiper-slide-title">PAY<span>お支払い</span></h3>
                    <p class="swiper-slide-text">現金またはクレジットカードまたは電子マネーでお支払いできます。</p>
                </div><!-- .swiper-slide-body -->
            </div><!-- .swiper-slide -->

            <div class="swiper-slide">
                <figure class="swiper-slide-img-wrapper">
                    <img src="<?php echo get_theme_file_uri('assets/images/bannon-morrissy-xFG4doqFI-o-unsplash.jpg'); ?>">
                </figure><!-- .swiper-slide-img-wrapper -->

                <div class="swiper-slide-body">
                    <h3 class="swiper-slide-title">DRINK<small>&</small>EAT<span>ご飲食</span></h3>
                    <p class="swiper-slide-text">お好きな席に座り、あとはごゆっくりお楽しみください。</p>
                </div><!-- .swiper-slide-body -->
            </div><!-- .swiper-slide -->

        </div><!-- .swiper-wrapper -->

        <div class="swiper-pagination"></div>

        <div class="swiper-button-wrapper">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div><!-- .swiper-button-wrapper -->

    </div><!-- .swiper -->

    <div class="swiper normal-swiper">

        <div class="swiper-wrapper">

            <div class="swiper-slide">
                <div class="swiper-slide-body">
                    <h3 class="swiper-slide-title">VISIT<span>ご来店</span></h3>
                    <p class="swiper-slide-text">まずは当店までお気を付けてご来店ください。</p>
                </div><!-- .swiper-slide-body -->
            </div><!-- .swiper-slide -->

            <div class="swiper-slide">
                <div class="swiper-slide-body">
                    <h3 class="swiper-slide-title">ORDER<span>ご注文</span></h3>
                    <p class="swiper-slide-text">レジカウンターにてお好きなメニューを注文します。フードはショーケースにあります。</p>
                </div><!-- .swiper-slide-body -->
            </div><!-- .swiper-slide -->

            <div class="swiper-slide">
                <div class="swiper-slide-body">
                    <h3 class="swiper-slide-title">PAY<span>お支払い</span></h3>
                    <p class="swiper-slide-text">現金またはクレジットカードまたは電子マネーでお支払いできます。</p>
                </div><!-- .swiper-slide-body -->
            </div><!-- .swiper-slide -->

            <div class="swiper-slide">
                <div class="swiper-slide-body">
                    <h3 class="swiper-slide-title">DRINK<small>&</small>EAT<span>ご飲食</span></h3>
                    <p class="swiper-slide-text">お好きな席に座り、あとはごゆっくりお楽しみください。</p>
                </div><!-- .swiper-slide-body -->
            </div><!-- .swiper-slide -->
        </div><!-- .swiper-wrapper -->
        <div class="swiper-pagination"></div>

        <div class="swiper-button-wrapper">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div><!-- .swiper-button-wrapper -->

    </div><!-- .swiper -->

    <!-- <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script> -->
    <script src="<?php echo get_template_directory_uri(); ?>/dist/js/bundle.js"></script>

    <?php get_footer(); ?>
</body>

</html>