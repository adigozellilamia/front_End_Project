$(document).ready(function(){
    function getRandomNumber(min, max)  {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var THEME_COLORS = {

        PRIMARY:         '#6f21c0',
        SECONDARY:       '#00bdd5',
        DARK:            '#333333',
        LIGHT:           '#f7f7f7',
        DEFAULT:         '#00bdd5',
        SUCCESS:         '#13b42b',
        INFO:            '#209ca9',
        WARNING:         '#ec531f',
        DANGER:          '#e31e62'

    };
    function hex2RGBA(hex, opacity) {

        var r, g, b;
    
        hex = hex.replace('#', '');
    
        r = parseInt(hex.substring(0,2), 16);
        g = parseInt(hex.substring(2,4), 16);
        b = parseInt(hex.substring(4,6), 16);
    
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
    }
    var $widgetSalesRegions = $('#widget-sales-regions');

    var vectorMapWorldRegionsList = ['AE', 'AF', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BI', 'BJ', 'BN', 'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CF', 'CG', 'CH', 'I', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GH', 'GL', 'GM', 'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IR', 'IS', 'IT', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KM', 'KN', 'KP', 'KR', 'KW', 'KZ', 'A', 'LB', 'LC', 'LK', 'LR', 'LS', 'LT', 'LV', 'LY', 'MA', 'MD', 'MG', 'MK', 'ML', 'MM', 'MN', 'MR', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NG', 'NI', 'NL', 'NO', 'NP', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PT', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SI', 'SK', 'SL', 'SN', 'SO', 'SR', 'ST', 'SV', 'SY', 'SZ', 'TD', 'TG', 'TH', 'TJ', 'TL', 'TM', 'TN', 'TR', 'TT', 'TW', 'TZ', 'UA', 'UG', 'US', 'UY', 'UZ', 'VE', 'VN', 'VU', 'YE', 'ZA', 'ZM', 'ZW'];
    var vectorMapWorldRegionsListMax = vectorMapWorldRegionsList.length - 1;
    var vectorMapRegionsColors = [];
    var tmpRegion,
        tmpRegionValue,
        tmpRegionColor,
        tmpRegionColorOpacity;

    for (i = 0, l = 50; i < l; i++) {

        tmpRegion = (vectorMapWorldRegionsList[getRandomNumber(0,  vectorMapWorldRegionsListMax)]).toLowerCase();

        tmpRegionValue = getRandomNumber(500, 1000);

        if      (tmpRegionValue >= 500 && tmpRegionValue < 600)   tmpRegionColor = THEME_COLORS.PRIMARY;
        else if (tmpRegionValue >= 600 && tmpRegionValue < 700)   tmpRegionColor = THEME_COLORS.DEFAULT;
        else if (tmpRegionValue >= 700 && tmpRegionValue < 800)   tmpRegionColor = THEME_COLORS.SUCCESS;
        else if (tmpRegionValue >= 800 && tmpRegionValue < 900)   tmpRegionColor = THEME_COLORS.WARNING;
        else if (tmpRegionValue >= 900 && tmpRegionValue <= 1000) tmpRegionColor = THEME_COLORS.DANGER;

        tmpRegionColorOpacity = Math.max(tmpRegionValue % 100 / 100, .6) * 100;

        vectorMapRegionsColors[tmpRegion] = hex2RGBA(tmpRegionColor, tmpRegionColorOpacity);

    }

    var $widgetSalesRegionsMap = $('#demo-jqvmap');

    if ($widgetSalesRegionsMap.length > 0) {
        $widgetSalesRegionsMap.vectorMap({

            map: 'world_en',

            backgroundColor: '#fff',
            borderColor: '#fff',
            borderOpacity: 0.25,
            borderWidth: 1,

            color: hex2RGBA(THEME_COLORS.DEFAULT, 100),
            hoverColor: THEME_COLORS.PRIMARY,

            colors: vectorMapRegionsColors,

            enableZoom: true,

            hoverOpacity: .8,

            normalizeFunction: 'linear',

            scaleColors: ['#b6d6ff', '#005ace'],

            selectedColor: THEME_COLORS.PRIMARY,

            selectedRegions: null,

            showTooltip: true,

            onRegionClick: function(element, code, region) {

                var $loader = $('<div>').addClass('loader');

                $widgetSalesRegions.find('.wg-left').append($loader);
                $loader.fadeIn();


                setTimeout(function() {

                    $widgetSalesRegions.find('.wg-region-name').html(region);

                    // Random data
                    var cntOrders    = getRandomNumber(100, 999),
                        cntSales     = getRandomNumber(100, 999),
                        cntCustomers = getRandomNumber(100, 999),
                        diffSummary  = getRandomNumber(1, 100);


                    $widgetSalesRegions.find('.wg-orders-value').html(cntOrders);
                    $widgetSalesRegions.find('.wg-sales-value').html(cntSales);
                    $widgetSalesRegions.find('.wg-customers-value').html(cntCustomers);
                    $widgetSalesRegions.find('.wg-summary .wg-value').html(diffSummary);

                    $loader.fadeOut();

                    setTimeout(function() { $loader.remove(); }, 300);

                }, 500);

            }

        });
    }

    var $widgetSalesRegionsHeight = $widgetSalesRegions.css('height');

    function setWidgetSalesRegionsHeight() {

        if (typeof $widgetSalesRegionsHeight === 'undefined') return;

        if ($(window).width() < 992) {
            $widgetSalesRegions.css('height', '');
        } else {
            $widgetSalesRegions.css('height', $widgetSalesRegionsHeight);
        }
    }

    setWidgetSalesRegionsHeight();
    $(window).on('resize', setWidgetSalesRegionsHeight);



   
})