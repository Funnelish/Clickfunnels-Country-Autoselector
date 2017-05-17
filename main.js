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
 
<script type="text/javascript">
  var COUNTRY_CODE = "US";
  var COUNTRY_BOX = "input-45667";
</script>

<script type="text/javascript">
  window.onload = function() {
    var x = document.getElementById(COUNTRY_BOX);
    var input = x.getElementsByTagName("input")[0];
    input.value = COUNTRY_CODE;   
  };
</script>
