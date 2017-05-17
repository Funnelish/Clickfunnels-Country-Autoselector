/*\\\\\\\\\\\\\\\\\\\\\\\\--YaYo--///////////////////////////
 * \\      Copyright (c) Yassine Y. (Funnelish.com)       //
 *  \\               All Rights Reserved.                //
 *   \\\\\\\\\\\\\\\\\\\\----<>----///////////////////////
 *==========================================================
 * 	FILE         :  /Funnelish/Clickfunnels-Country-Autoselector.js
 * 	AUTHOR       :  Yassine Y.
 * 	DESCRIPTION  : 	
 *
 * 	UPDATES      :
 *	        _CREATED : May 12, 2017	 _By : Yassine Y.
 *         _CHANGED : May 17, 2017	 _By : Yassine Y.
 */
 
<script>
  var COUNTRY_CODE = "US";
  var HIDE_COUNTRY_BOX = true;
</script>

<script type="text/javascript">
  window.onload = function() {
    var country_box = document.getElementsByName("shipping_country");
    if (country_box == null || country_box.length == 0)
        country_box = document.getElementsByName("country");
    if (country_box == null || country_box.length == 0)
        return; // no country box found
 
    var input = country_box[0];
    input.value = COUNTRY_CODE;
    if (HIDE_COUNTRY_BOX) {
        var parent = input.parentElement;
        parent.style.display = "none";
    }
    //var input = x.getElementsByTagName("input")[0];
    //var x = document.getElementById(COUNTRY_BOX);
  };
</script>
