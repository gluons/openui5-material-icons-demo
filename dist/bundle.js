/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const mdIcons = __webpack_require__(1);

	sap.ui.getCore().attachInit(function () {
		let layout = new sap.ui.layout.Grid();
		layout.placeAt('container');
		for (let icon of mdIcons) {
			sap.ui.core.IconPool.addIcon(icon.id, 'material-icons', {
				fontFamily: 'Material Icons',
				content: icon.unicode
			});
			let button = new sap.ui.commons.Button({
				text: icon.id,
				icon: 'sap-icon://material-icons/' + icon.id,
				height: '30px'
			});
			layout.addContent(button);
		}
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = (function () {
		let charList = __webpack_require__(2);
		return charList.icons;
	})();


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"icons": [
			{
				"id": "3d_rotation",
				"unicode": "e84d"
			},
			{
				"id": "ac_unit",
				"unicode": "eb3b"
			},
			{
				"id": "access_alarm",
				"unicode": "e190"
			},
			{
				"id": "access_alarms",
				"unicode": "e191"
			},
			{
				"id": "access_time",
				"unicode": "e192"
			},
			{
				"id": "accessibility",
				"unicode": "e84e"
			},
			{
				"id": "accessible",
				"unicode": "e914"
			},
			{
				"id": "account_balance",
				"unicode": "e84f"
			},
			{
				"id": "account_balance_wallet",
				"unicode": "e850"
			},
			{
				"id": "account_box",
				"unicode": "e851"
			},
			{
				"id": "account_circle",
				"unicode": "e853"
			},
			{
				"id": "adb",
				"unicode": "e60e"
			},
			{
				"id": "add",
				"unicode": "e145"
			},
			{
				"id": "add_a_photo",
				"unicode": "e439"
			},
			{
				"id": "add_alarm",
				"unicode": "e193"
			},
			{
				"id": "add_alert",
				"unicode": "e003"
			},
			{
				"id": "add_box",
				"unicode": "e146"
			},
			{
				"id": "add_circle",
				"unicode": "e147"
			},
			{
				"id": "add_circle_outline",
				"unicode": "e148"
			},
			{
				"id": "add_location",
				"unicode": "e567"
			},
			{
				"id": "add_shopping_cart",
				"unicode": "e854"
			},
			{
				"id": "add_to_photos",
				"unicode": "e39d"
			},
			{
				"id": "add_to_queue",
				"unicode": "e05c"
			},
			{
				"id": "adjust",
				"unicode": "e39e"
			},
			{
				"id": "airline_seat_flat",
				"unicode": "e630"
			},
			{
				"id": "airline_seat_flat_angled",
				"unicode": "e631"
			},
			{
				"id": "airline_seat_individual_suite",
				"unicode": "e632"
			},
			{
				"id": "airline_seat_legroom_extra",
				"unicode": "e633"
			},
			{
				"id": "airline_seat_legroom_normal",
				"unicode": "e634"
			},
			{
				"id": "airline_seat_legroom_reduced",
				"unicode": "e635"
			},
			{
				"id": "airline_seat_recline_extra",
				"unicode": "e636"
			},
			{
				"id": "airline_seat_recline_normal",
				"unicode": "e637"
			},
			{
				"id": "airplanemode_active",
				"unicode": "e195"
			},
			{
				"id": "airplanemode_inactive",
				"unicode": "e194"
			},
			{
				"id": "airplay",
				"unicode": "e055"
			},
			{
				"id": "airport_shuttle",
				"unicode": "eb3c"
			},
			{
				"id": "alarm",
				"unicode": "e855"
			},
			{
				"id": "alarm_add",
				"unicode": "e856"
			},
			{
				"id": "alarm_off",
				"unicode": "e857"
			},
			{
				"id": "alarm_on",
				"unicode": "e858"
			},
			{
				"id": "album",
				"unicode": "e019"
			},
			{
				"id": "all_inclusive",
				"unicode": "eb3d"
			},
			{
				"id": "all_out",
				"unicode": "e90b"
			},
			{
				"id": "android",
				"unicode": "e859"
			},
			{
				"id": "announcement",
				"unicode": "e85a"
			},
			{
				"id": "apps",
				"unicode": "e5c3"
			},
			{
				"id": "archive",
				"unicode": "e149"
			},
			{
				"id": "arrow_back",
				"unicode": "e5c4"
			},
			{
				"id": "arrow_downward",
				"unicode": "e5db"
			},
			{
				"id": "arrow_drop_down",
				"unicode": "e5c5"
			},
			{
				"id": "arrow_drop_down_circle",
				"unicode": "e5c6"
			},
			{
				"id": "arrow_drop_up",
				"unicode": "e5c7"
			},
			{
				"id": "arrow_forward",
				"unicode": "e5c8"
			},
			{
				"id": "arrow_upward",
				"unicode": "e5d8"
			},
			{
				"id": "art_track",
				"unicode": "e060"
			},
			{
				"id": "aspect_ratio",
				"unicode": "e85b"
			},
			{
				"id": "assessment",
				"unicode": "e85c"
			},
			{
				"id": "assignment",
				"unicode": "e85d"
			},
			{
				"id": "assignment_ind",
				"unicode": "e85e"
			},
			{
				"id": "assignment_late",
				"unicode": "e85f"
			},
			{
				"id": "assignment_return",
				"unicode": "e860"
			},
			{
				"id": "assignment_returned",
				"unicode": "e861"
			},
			{
				"id": "assignment_turned_in",
				"unicode": "e862"
			},
			{
				"id": "assistant",
				"unicode": "e39f"
			},
			{
				"id": "assistant_photo",
				"unicode": "e3a0"
			},
			{
				"id": "attach_file",
				"unicode": "e226"
			},
			{
				"id": "attach_money",
				"unicode": "e227"
			},
			{
				"id": "attachment",
				"unicode": "e2bc"
			},
			{
				"id": "audiotrack",
				"unicode": "e3a1"
			},
			{
				"id": "autorenew",
				"unicode": "e863"
			},
			{
				"id": "av_timer",
				"unicode": "e01b"
			},
			{
				"id": "backspace",
				"unicode": "e14a"
			},
			{
				"id": "backup",
				"unicode": "e864"
			},
			{
				"id": "battery_alert",
				"unicode": "e19c"
			},
			{
				"id": "battery_charging_full",
				"unicode": "e1a3"
			},
			{
				"id": "battery_full",
				"unicode": "e1a4"
			},
			{
				"id": "battery_std",
				"unicode": "e1a5"
			},
			{
				"id": "battery_unknown",
				"unicode": "e1a6"
			},
			{
				"id": "beach_access",
				"unicode": "eb3e"
			},
			{
				"id": "beenhere",
				"unicode": "e52d"
			},
			{
				"id": "block",
				"unicode": "e14b"
			},
			{
				"id": "bluetooth",
				"unicode": "e1a7"
			},
			{
				"id": "bluetooth_audio",
				"unicode": "e60f"
			},
			{
				"id": "bluetooth_connected",
				"unicode": "e1a8"
			},
			{
				"id": "bluetooth_disabled",
				"unicode": "e1a9"
			},
			{
				"id": "bluetooth_searching",
				"unicode": "e1aa"
			},
			{
				"id": "blur_circular",
				"unicode": "e3a2"
			},
			{
				"id": "blur_linear",
				"unicode": "e3a3"
			},
			{
				"id": "blur_off",
				"unicode": "e3a4"
			},
			{
				"id": "blur_on",
				"unicode": "e3a5"
			},
			{
				"id": "book",
				"unicode": "e865"
			},
			{
				"id": "bookmark",
				"unicode": "e866"
			},
			{
				"id": "bookmark_border",
				"unicode": "e867"
			},
			{
				"id": "border_all",
				"unicode": "e228"
			},
			{
				"id": "border_bottom",
				"unicode": "e229"
			},
			{
				"id": "border_clear",
				"unicode": "e22a"
			},
			{
				"id": "border_color",
				"unicode": "e22b"
			},
			{
				"id": "border_horizontal",
				"unicode": "e22c"
			},
			{
				"id": "border_inner",
				"unicode": "e22d"
			},
			{
				"id": "border_left",
				"unicode": "e22e"
			},
			{
				"id": "border_outer",
				"unicode": "e22f"
			},
			{
				"id": "border_right",
				"unicode": "e230"
			},
			{
				"id": "border_style",
				"unicode": "e231"
			},
			{
				"id": "border_top",
				"unicode": "e232"
			},
			{
				"id": "border_vertical",
				"unicode": "e233"
			},
			{
				"id": "branding_watermark",
				"unicode": "e06b"
			},
			{
				"id": "brightness_1",
				"unicode": "e3a6"
			},
			{
				"id": "brightness_2",
				"unicode": "e3a7"
			},
			{
				"id": "brightness_3",
				"unicode": "e3a8"
			},
			{
				"id": "brightness_4",
				"unicode": "e3a9"
			},
			{
				"id": "brightness_5",
				"unicode": "e3aa"
			},
			{
				"id": "brightness_6",
				"unicode": "e3ab"
			},
			{
				"id": "brightness_7",
				"unicode": "e3ac"
			},
			{
				"id": "brightness_auto",
				"unicode": "e1ab"
			},
			{
				"id": "brightness_high",
				"unicode": "e1ac"
			},
			{
				"id": "brightness_low",
				"unicode": "e1ad"
			},
			{
				"id": "brightness_medium",
				"unicode": "e1ae"
			},
			{
				"id": "broken_image",
				"unicode": "e3ad"
			},
			{
				"id": "brush",
				"unicode": "e3ae"
			},
			{
				"id": "bubble_chart",
				"unicode": "e6dd"
			},
			{
				"id": "bug_report",
				"unicode": "e868"
			},
			{
				"id": "build",
				"unicode": "e869"
			},
			{
				"id": "burst_mode",
				"unicode": "e43c"
			},
			{
				"id": "business",
				"unicode": "e0af"
			},
			{
				"id": "business_center",
				"unicode": "eb3f"
			},
			{
				"id": "cached",
				"unicode": "e86a"
			},
			{
				"id": "cake",
				"unicode": "e7e9"
			},
			{
				"id": "call",
				"unicode": "e0b0"
			},
			{
				"id": "call_end",
				"unicode": "e0b1"
			},
			{
				"id": "call_made",
				"unicode": "e0b2"
			},
			{
				"id": "call_merge",
				"unicode": "e0b3"
			},
			{
				"id": "call_missed",
				"unicode": "e0b4"
			},
			{
				"id": "call_missed_outgoing",
				"unicode": "e0e4"
			},
			{
				"id": "call_received",
				"unicode": "e0b5"
			},
			{
				"id": "call_split",
				"unicode": "e0b6"
			},
			{
				"id": "call_to_action",
				"unicode": "e06c"
			},
			{
				"id": "camera",
				"unicode": "e3af"
			},
			{
				"id": "camera_alt",
				"unicode": "e3b0"
			},
			{
				"id": "camera_enhance",
				"unicode": "e8fc"
			},
			{
				"id": "camera_front",
				"unicode": "e3b1"
			},
			{
				"id": "camera_rear",
				"unicode": "e3b2"
			},
			{
				"id": "camera_roll",
				"unicode": "e3b3"
			},
			{
				"id": "cancel",
				"unicode": "e5c9"
			},
			{
				"id": "card_giftcard",
				"unicode": "e8f6"
			},
			{
				"id": "card_membership",
				"unicode": "e8f7"
			},
			{
				"id": "card_travel",
				"unicode": "e8f8"
			},
			{
				"id": "casino",
				"unicode": "eb40"
			},
			{
				"id": "cast",
				"unicode": "e307"
			},
			{
				"id": "cast_connected",
				"unicode": "e308"
			},
			{
				"id": "center_focus_strong",
				"unicode": "e3b4"
			},
			{
				"id": "center_focus_weak",
				"unicode": "e3b5"
			},
			{
				"id": "change_history",
				"unicode": "e86b"
			},
			{
				"id": "chat",
				"unicode": "e0b7"
			},
			{
				"id": "chat_bubble",
				"unicode": "e0ca"
			},
			{
				"id": "chat_bubble_outline",
				"unicode": "e0cb"
			},
			{
				"id": "check",
				"unicode": "e5ca"
			},
			{
				"id": "check_box",
				"unicode": "e834"
			},
			{
				"id": "check_box_outline_blank",
				"unicode": "e835"
			},
			{
				"id": "check_circle",
				"unicode": "e86c"
			},
			{
				"id": "chevron_left",
				"unicode": "e5cb"
			},
			{
				"id": "chevron_right",
				"unicode": "e5cc"
			},
			{
				"id": "child_care",
				"unicode": "eb41"
			},
			{
				"id": "child_friendly",
				"unicode": "eb42"
			},
			{
				"id": "chrome_reader_mode",
				"unicode": "e86d"
			},
			{
				"id": "class",
				"unicode": "e86e"
			},
			{
				"id": "clear",
				"unicode": "e14c"
			},
			{
				"id": "clear_all",
				"unicode": "e0b8"
			},
			{
				"id": "close",
				"unicode": "e5cd"
			},
			{
				"id": "closed_caption",
				"unicode": "e01c"
			},
			{
				"id": "cloud",
				"unicode": "e2bd"
			},
			{
				"id": "cloud_circle",
				"unicode": "e2be"
			},
			{
				"id": "cloud_done",
				"unicode": "e2bf"
			},
			{
				"id": "cloud_download",
				"unicode": "e2c0"
			},
			{
				"id": "cloud_off",
				"unicode": "e2c1"
			},
			{
				"id": "cloud_queue",
				"unicode": "e2c2"
			},
			{
				"id": "cloud_upload",
				"unicode": "e2c3"
			},
			{
				"id": "code",
				"unicode": "e86f"
			},
			{
				"id": "collections",
				"unicode": "e3b6"
			},
			{
				"id": "collections_bookmark",
				"unicode": "e431"
			},
			{
				"id": "color_lens",
				"unicode": "e3b7"
			},
			{
				"id": "colorize",
				"unicode": "e3b8"
			},
			{
				"id": "comment",
				"unicode": "e0b9"
			},
			{
				"id": "compare",
				"unicode": "e3b9"
			},
			{
				"id": "compare_arrows",
				"unicode": "e915"
			},
			{
				"id": "computer",
				"unicode": "e30a"
			},
			{
				"id": "confirmation_number",
				"unicode": "e638"
			},
			{
				"id": "contact_mail",
				"unicode": "e0d0"
			},
			{
				"id": "contact_phone",
				"unicode": "e0cf"
			},
			{
				"id": "contacts",
				"unicode": "e0ba"
			},
			{
				"id": "content_copy",
				"unicode": "e14d"
			},
			{
				"id": "content_cut",
				"unicode": "e14e"
			},
			{
				"id": "content_paste",
				"unicode": "e14f"
			},
			{
				"id": "control_point",
				"unicode": "e3ba"
			},
			{
				"id": "control_point_duplicate",
				"unicode": "e3bb"
			},
			{
				"id": "copyright",
				"unicode": "e90c"
			},
			{
				"id": "create",
				"unicode": "e150"
			},
			{
				"id": "create_new_folder",
				"unicode": "e2cc"
			},
			{
				"id": "credit_card",
				"unicode": "e870"
			},
			{
				"id": "crop",
				"unicode": "e3be"
			},
			{
				"id": "crop_16_9",
				"unicode": "e3bc"
			},
			{
				"id": "crop_3_2",
				"unicode": "e3bd"
			},
			{
				"id": "crop_5_4",
				"unicode": "e3bf"
			},
			{
				"id": "crop_7_5",
				"unicode": "e3c0"
			},
			{
				"id": "crop_din",
				"unicode": "e3c1"
			},
			{
				"id": "crop_free",
				"unicode": "e3c2"
			},
			{
				"id": "crop_landscape",
				"unicode": "e3c3"
			},
			{
				"id": "crop_original",
				"unicode": "e3c4"
			},
			{
				"id": "crop_portrait",
				"unicode": "e3c5"
			},
			{
				"id": "crop_rotate",
				"unicode": "e437"
			},
			{
				"id": "crop_square",
				"unicode": "e3c6"
			},
			{
				"id": "dashboard",
				"unicode": "e871"
			},
			{
				"id": "data_usage",
				"unicode": "e1af"
			},
			{
				"id": "date_range",
				"unicode": "e916"
			},
			{
				"id": "dehaze",
				"unicode": "e3c7"
			},
			{
				"id": "delete",
				"unicode": "e872"
			},
			{
				"id": "delete_forever",
				"unicode": "e92b"
			},
			{
				"id": "delete_sweep",
				"unicode": "e16c"
			},
			{
				"id": "description",
				"unicode": "e873"
			},
			{
				"id": "desktop_mac",
				"unicode": "e30b"
			},
			{
				"id": "desktop_windows",
				"unicode": "e30c"
			},
			{
				"id": "details",
				"unicode": "e3c8"
			},
			{
				"id": "developer_board",
				"unicode": "e30d"
			},
			{
				"id": "developer_mode",
				"unicode": "e1b0"
			},
			{
				"id": "device_hub",
				"unicode": "e335"
			},
			{
				"id": "devices",
				"unicode": "e1b1"
			},
			{
				"id": "devices_other",
				"unicode": "e337"
			},
			{
				"id": "dialer_sip",
				"unicode": "e0bb"
			},
			{
				"id": "dialpad",
				"unicode": "e0bc"
			},
			{
				"id": "directions",
				"unicode": "e52e"
			},
			{
				"id": "directions_bike",
				"unicode": "e52f"
			},
			{
				"id": "directions_boat",
				"unicode": "e532"
			},
			{
				"id": "directions_bus",
				"unicode": "e530"
			},
			{
				"id": "directions_car",
				"unicode": "e531"
			},
			{
				"id": "directions_railway",
				"unicode": "e534"
			},
			{
				"id": "directions_run",
				"unicode": "e566"
			},
			{
				"id": "directions_subway",
				"unicode": "e533"
			},
			{
				"id": "directions_transit",
				"unicode": "e535"
			},
			{
				"id": "directions_walk",
				"unicode": "e536"
			},
			{
				"id": "disc_full",
				"unicode": "e610"
			},
			{
				"id": "dns",
				"unicode": "e875"
			},
			{
				"id": "do_not_disturb",
				"unicode": "e612"
			},
			{
				"id": "do_not_disturb_alt",
				"unicode": "e611"
			},
			{
				"id": "do_not_disturb_off",
				"unicode": "e643"
			},
			{
				"id": "do_not_disturb_on",
				"unicode": "e644"
			},
			{
				"id": "dock",
				"unicode": "e30e"
			},
			{
				"id": "domain",
				"unicode": "e7ee"
			},
			{
				"id": "done",
				"unicode": "e876"
			},
			{
				"id": "done_all",
				"unicode": "e877"
			},
			{
				"id": "donut_large",
				"unicode": "e917"
			},
			{
				"id": "donut_small",
				"unicode": "e918"
			},
			{
				"id": "drafts",
				"unicode": "e151"
			},
			{
				"id": "drag_handle",
				"unicode": "e25d"
			},
			{
				"id": "drive_eta",
				"unicode": "e613"
			},
			{
				"id": "dvr",
				"unicode": "e1b2"
			},
			{
				"id": "edit",
				"unicode": "e3c9"
			},
			{
				"id": "edit_location",
				"unicode": "e568"
			},
			{
				"id": "eject",
				"unicode": "e8fb"
			},
			{
				"id": "email",
				"unicode": "e0be"
			},
			{
				"id": "enhanced_encryption",
				"unicode": "e63f"
			},
			{
				"id": "equalizer",
				"unicode": "e01d"
			},
			{
				"id": "error",
				"unicode": "e000"
			},
			{
				"id": "error_outline",
				"unicode": "e001"
			},
			{
				"id": "euro_symbol",
				"unicode": "e926"
			},
			{
				"id": "ev_station",
				"unicode": "e56d"
			},
			{
				"id": "event",
				"unicode": "e878"
			},
			{
				"id": "event_available",
				"unicode": "e614"
			},
			{
				"id": "event_busy",
				"unicode": "e615"
			},
			{
				"id": "event_note",
				"unicode": "e616"
			},
			{
				"id": "event_seat",
				"unicode": "e903"
			},
			{
				"id": "exit_to_app",
				"unicode": "e879"
			},
			{
				"id": "expand_less",
				"unicode": "e5ce"
			},
			{
				"id": "expand_more",
				"unicode": "e5cf"
			},
			{
				"id": "explicit",
				"unicode": "e01e"
			},
			{
				"id": "explore",
				"unicode": "e87a"
			},
			{
				"id": "exposure",
				"unicode": "e3ca"
			},
			{
				"id": "exposure_neg_1",
				"unicode": "e3cb"
			},
			{
				"id": "exposure_neg_2",
				"unicode": "e3cc"
			},
			{
				"id": "exposure_plus_1",
				"unicode": "e3cd"
			},
			{
				"id": "exposure_plus_2",
				"unicode": "e3ce"
			},
			{
				"id": "exposure_zero",
				"unicode": "e3cf"
			},
			{
				"id": "extension",
				"unicode": "e87b"
			},
			{
				"id": "face",
				"unicode": "e87c"
			},
			{
				"id": "fast_forward",
				"unicode": "e01f"
			},
			{
				"id": "fast_rewind",
				"unicode": "e020"
			},
			{
				"id": "favorite",
				"unicode": "e87d"
			},
			{
				"id": "favorite_border",
				"unicode": "e87e"
			},
			{
				"id": "featured_play_list",
				"unicode": "e06d"
			},
			{
				"id": "featured_video",
				"unicode": "e06e"
			},
			{
				"id": "feedback",
				"unicode": "e87f"
			},
			{
				"id": "fiber_dvr",
				"unicode": "e05d"
			},
			{
				"id": "fiber_manual_record",
				"unicode": "e061"
			},
			{
				"id": "fiber_new",
				"unicode": "e05e"
			},
			{
				"id": "fiber_pin",
				"unicode": "e06a"
			},
			{
				"id": "fiber_smart_record",
				"unicode": "e062"
			},
			{
				"id": "file_download",
				"unicode": "e2c4"
			},
			{
				"id": "file_upload",
				"unicode": "e2c6"
			},
			{
				"id": "filter",
				"unicode": "e3d3"
			},
			{
				"id": "filter_1",
				"unicode": "e3d0"
			},
			{
				"id": "filter_2",
				"unicode": "e3d1"
			},
			{
				"id": "filter_3",
				"unicode": "e3d2"
			},
			{
				"id": "filter_4",
				"unicode": "e3d4"
			},
			{
				"id": "filter_5",
				"unicode": "e3d5"
			},
			{
				"id": "filter_6",
				"unicode": "e3d6"
			},
			{
				"id": "filter_7",
				"unicode": "e3d7"
			},
			{
				"id": "filter_8",
				"unicode": "e3d8"
			},
			{
				"id": "filter_9",
				"unicode": "e3d9"
			},
			{
				"id": "filter_9_plus",
				"unicode": "e3da"
			},
			{
				"id": "filter_b_and_w",
				"unicode": "e3db"
			},
			{
				"id": "filter_center_focus",
				"unicode": "e3dc"
			},
			{
				"id": "filter_drama",
				"unicode": "e3dd"
			},
			{
				"id": "filter_frames",
				"unicode": "e3de"
			},
			{
				"id": "filter_hdr",
				"unicode": "e3df"
			},
			{
				"id": "filter_list",
				"unicode": "e152"
			},
			{
				"id": "filter_none",
				"unicode": "e3e0"
			},
			{
				"id": "filter_tilt_shift",
				"unicode": "e3e2"
			},
			{
				"id": "filter_vintage",
				"unicode": "e3e3"
			},
			{
				"id": "find_in_page",
				"unicode": "e880"
			},
			{
				"id": "find_replace",
				"unicode": "e881"
			},
			{
				"id": "fingerprint",
				"unicode": "e90d"
			},
			{
				"id": "first_page",
				"unicode": "e5dc"
			},
			{
				"id": "fitness_center",
				"unicode": "eb43"
			},
			{
				"id": "flag",
				"unicode": "e153"
			},
			{
				"id": "flare",
				"unicode": "e3e4"
			},
			{
				"id": "flash_auto",
				"unicode": "e3e5"
			},
			{
				"id": "flash_off",
				"unicode": "e3e6"
			},
			{
				"id": "flash_on",
				"unicode": "e3e7"
			},
			{
				"id": "flight",
				"unicode": "e539"
			},
			{
				"id": "flight_land",
				"unicode": "e904"
			},
			{
				"id": "flight_takeoff",
				"unicode": "e905"
			},
			{
				"id": "flip",
				"unicode": "e3e8"
			},
			{
				"id": "flip_to_back",
				"unicode": "e882"
			},
			{
				"id": "flip_to_front",
				"unicode": "e883"
			},
			{
				"id": "folder",
				"unicode": "e2c7"
			},
			{
				"id": "folder_open",
				"unicode": "e2c8"
			},
			{
				"id": "folder_shared",
				"unicode": "e2c9"
			},
			{
				"id": "folder_special",
				"unicode": "e617"
			},
			{
				"id": "font_download",
				"unicode": "e167"
			},
			{
				"id": "format_align_center",
				"unicode": "e234"
			},
			{
				"id": "format_align_justify",
				"unicode": "e235"
			},
			{
				"id": "format_align_left",
				"unicode": "e236"
			},
			{
				"id": "format_align_right",
				"unicode": "e237"
			},
			{
				"id": "format_bold",
				"unicode": "e238"
			},
			{
				"id": "format_clear",
				"unicode": "e239"
			},
			{
				"id": "format_color_fill",
				"unicode": "e23a"
			},
			{
				"id": "format_color_reset",
				"unicode": "e23b"
			},
			{
				"id": "format_color_text",
				"unicode": "e23c"
			},
			{
				"id": "format_indent_decrease",
				"unicode": "e23d"
			},
			{
				"id": "format_indent_increase",
				"unicode": "e23e"
			},
			{
				"id": "format_italic",
				"unicode": "e23f"
			},
			{
				"id": "format_line_spacing",
				"unicode": "e240"
			},
			{
				"id": "format_list_bulleted",
				"unicode": "e241"
			},
			{
				"id": "format_list_numbered",
				"unicode": "e242"
			},
			{
				"id": "format_paint",
				"unicode": "e243"
			},
			{
				"id": "format_quote",
				"unicode": "e244"
			},
			{
				"id": "format_shapes",
				"unicode": "e25e"
			},
			{
				"id": "format_size",
				"unicode": "e245"
			},
			{
				"id": "format_strikethrough",
				"unicode": "e246"
			},
			{
				"id": "format_textdirection_l_to_r",
				"unicode": "e247"
			},
			{
				"id": "format_textdirection_r_to_l",
				"unicode": "e248"
			},
			{
				"id": "format_underlined",
				"unicode": "e249"
			},
			{
				"id": "forum",
				"unicode": "e0bf"
			},
			{
				"id": "forward",
				"unicode": "e154"
			},
			{
				"id": "forward_10",
				"unicode": "e056"
			},
			{
				"id": "forward_30",
				"unicode": "e057"
			},
			{
				"id": "forward_5",
				"unicode": "e058"
			},
			{
				"id": "free_breakfast",
				"unicode": "eb44"
			},
			{
				"id": "fullscreen",
				"unicode": "e5d0"
			},
			{
				"id": "fullscreen_exit",
				"unicode": "e5d1"
			},
			{
				"id": "functions",
				"unicode": "e24a"
			},
			{
				"id": "g_translate",
				"unicode": "e927"
			},
			{
				"id": "gamepad",
				"unicode": "e30f"
			},
			{
				"id": "games",
				"unicode": "e021"
			},
			{
				"id": "gavel",
				"unicode": "e90e"
			},
			{
				"id": "gesture",
				"unicode": "e155"
			},
			{
				"id": "get_app",
				"unicode": "e884"
			},
			{
				"id": "gif",
				"unicode": "e908"
			},
			{
				"id": "golf_course",
				"unicode": "eb45"
			},
			{
				"id": "gps_fixed",
				"unicode": "e1b3"
			},
			{
				"id": "gps_not_fixed",
				"unicode": "e1b4"
			},
			{
				"id": "gps_off",
				"unicode": "e1b5"
			},
			{
				"id": "grade",
				"unicode": "e885"
			},
			{
				"id": "gradient",
				"unicode": "e3e9"
			},
			{
				"id": "grain",
				"unicode": "e3ea"
			},
			{
				"id": "graphic_eq",
				"unicode": "e1b8"
			},
			{
				"id": "grid_off",
				"unicode": "e3eb"
			},
			{
				"id": "grid_on",
				"unicode": "e3ec"
			},
			{
				"id": "group",
				"unicode": "e7ef"
			},
			{
				"id": "group_add",
				"unicode": "e7f0"
			},
			{
				"id": "group_work",
				"unicode": "e886"
			},
			{
				"id": "hd",
				"unicode": "e052"
			},
			{
				"id": "hdr_off",
				"unicode": "e3ed"
			},
			{
				"id": "hdr_on",
				"unicode": "e3ee"
			},
			{
				"id": "hdr_strong",
				"unicode": "e3f1"
			},
			{
				"id": "hdr_weak",
				"unicode": "e3f2"
			},
			{
				"id": "headset",
				"unicode": "e310"
			},
			{
				"id": "headset_mic",
				"unicode": "e311"
			},
			{
				"id": "healing",
				"unicode": "e3f3"
			},
			{
				"id": "hearing",
				"unicode": "e023"
			},
			{
				"id": "help",
				"unicode": "e887"
			},
			{
				"id": "help_outline",
				"unicode": "e8fd"
			},
			{
				"id": "high_quality",
				"unicode": "e024"
			},
			{
				"id": "highlight",
				"unicode": "e25f"
			},
			{
				"id": "highlight_off",
				"unicode": "e888"
			},
			{
				"id": "history",
				"unicode": "e889"
			},
			{
				"id": "home",
				"unicode": "e88a"
			},
			{
				"id": "hot_tub",
				"unicode": "eb46"
			},
			{
				"id": "hotel",
				"unicode": "e53a"
			},
			{
				"id": "hourglass_empty",
				"unicode": "e88b"
			},
			{
				"id": "hourglass_full",
				"unicode": "e88c"
			},
			{
				"id": "http",
				"unicode": "e902"
			},
			{
				"id": "https",
				"unicode": "e88d"
			},
			{
				"id": "image",
				"unicode": "e3f4"
			},
			{
				"id": "image_aspect_ratio",
				"unicode": "e3f5"
			},
			{
				"id": "import_contacts",
				"unicode": "e0e0"
			},
			{
				"id": "import_export",
				"unicode": "e0c3"
			},
			{
				"id": "important_devices",
				"unicode": "e912"
			},
			{
				"id": "inbox",
				"unicode": "e156"
			},
			{
				"id": "indeterminate_check_box",
				"unicode": "e909"
			},
			{
				"id": "info",
				"unicode": "e88e"
			},
			{
				"id": "info_outline",
				"unicode": "e88f"
			},
			{
				"id": "input",
				"unicode": "e890"
			},
			{
				"id": "insert_chart",
				"unicode": "e24b"
			},
			{
				"id": "insert_comment",
				"unicode": "e24c"
			},
			{
				"id": "insert_drive_file",
				"unicode": "e24d"
			},
			{
				"id": "insert_emoticon",
				"unicode": "e24e"
			},
			{
				"id": "insert_invitation",
				"unicode": "e24f"
			},
			{
				"id": "insert_link",
				"unicode": "e250"
			},
			{
				"id": "insert_photo",
				"unicode": "e251"
			},
			{
				"id": "invert_colors",
				"unicode": "e891"
			},
			{
				"id": "invert_colors_off",
				"unicode": "e0c4"
			},
			{
				"id": "iso",
				"unicode": "e3f6"
			},
			{
				"id": "keyboard",
				"unicode": "e312"
			},
			{
				"id": "keyboard_arrow_down",
				"unicode": "e313"
			},
			{
				"id": "keyboard_arrow_left",
				"unicode": "e314"
			},
			{
				"id": "keyboard_arrow_right",
				"unicode": "e315"
			},
			{
				"id": "keyboard_arrow_up",
				"unicode": "e316"
			},
			{
				"id": "keyboard_backspace",
				"unicode": "e317"
			},
			{
				"id": "keyboard_capslock",
				"unicode": "e318"
			},
			{
				"id": "keyboard_hide",
				"unicode": "e31a"
			},
			{
				"id": "keyboard_return",
				"unicode": "e31b"
			},
			{
				"id": "keyboard_tab",
				"unicode": "e31c"
			},
			{
				"id": "keyboard_voice",
				"unicode": "e31d"
			},
			{
				"id": "kitchen",
				"unicode": "eb47"
			},
			{
				"id": "label",
				"unicode": "e892"
			},
			{
				"id": "label_outline",
				"unicode": "e893"
			},
			{
				"id": "landscape",
				"unicode": "e3f7"
			},
			{
				"id": "language",
				"unicode": "e894"
			},
			{
				"id": "laptop",
				"unicode": "e31e"
			},
			{
				"id": "laptop_chromebook",
				"unicode": "e31f"
			},
			{
				"id": "laptop_mac",
				"unicode": "e320"
			},
			{
				"id": "laptop_windows",
				"unicode": "e321"
			},
			{
				"id": "last_page",
				"unicode": "e5dd"
			},
			{
				"id": "launch",
				"unicode": "e895"
			},
			{
				"id": "layers",
				"unicode": "e53b"
			},
			{
				"id": "layers_clear",
				"unicode": "e53c"
			},
			{
				"id": "leak_add",
				"unicode": "e3f8"
			},
			{
				"id": "leak_remove",
				"unicode": "e3f9"
			},
			{
				"id": "lens",
				"unicode": "e3fa"
			},
			{
				"id": "library_add",
				"unicode": "e02e"
			},
			{
				"id": "library_books",
				"unicode": "e02f"
			},
			{
				"id": "library_music",
				"unicode": "e030"
			},
			{
				"id": "lightbulb_outline",
				"unicode": "e90f"
			},
			{
				"id": "line_style",
				"unicode": "e919"
			},
			{
				"id": "line_weight",
				"unicode": "e91a"
			},
			{
				"id": "linear_scale",
				"unicode": "e260"
			},
			{
				"id": "link",
				"unicode": "e157"
			},
			{
				"id": "linked_camera",
				"unicode": "e438"
			},
			{
				"id": "list",
				"unicode": "e896"
			},
			{
				"id": "live_help",
				"unicode": "e0c6"
			},
			{
				"id": "live_tv",
				"unicode": "e639"
			},
			{
				"id": "local_activity",
				"unicode": "e53f"
			},
			{
				"id": "local_airport",
				"unicode": "e53d"
			},
			{
				"id": "local_atm",
				"unicode": "e53e"
			},
			{
				"id": "local_bar",
				"unicode": "e540"
			},
			{
				"id": "local_cafe",
				"unicode": "e541"
			},
			{
				"id": "local_car_wash",
				"unicode": "e542"
			},
			{
				"id": "local_convenience_store",
				"unicode": "e543"
			},
			{
				"id": "local_dining",
				"unicode": "e556"
			},
			{
				"id": "local_drink",
				"unicode": "e544"
			},
			{
				"id": "local_florist",
				"unicode": "e545"
			},
			{
				"id": "local_gas_station",
				"unicode": "e546"
			},
			{
				"id": "local_grocery_store",
				"unicode": "e547"
			},
			{
				"id": "local_hospital",
				"unicode": "e548"
			},
			{
				"id": "local_hotel",
				"unicode": "e549"
			},
			{
				"id": "local_laundry_service",
				"unicode": "e54a"
			},
			{
				"id": "local_library",
				"unicode": "e54b"
			},
			{
				"id": "local_mall",
				"unicode": "e54c"
			},
			{
				"id": "local_movies",
				"unicode": "e54d"
			},
			{
				"id": "local_offer",
				"unicode": "e54e"
			},
			{
				"id": "local_parking",
				"unicode": "e54f"
			},
			{
				"id": "local_pharmacy",
				"unicode": "e550"
			},
			{
				"id": "local_phone",
				"unicode": "e551"
			},
			{
				"id": "local_pizza",
				"unicode": "e552"
			},
			{
				"id": "local_play",
				"unicode": "e553"
			},
			{
				"id": "local_post_office",
				"unicode": "e554"
			},
			{
				"id": "local_printshop",
				"unicode": "e555"
			},
			{
				"id": "local_see",
				"unicode": "e557"
			},
			{
				"id": "local_shipping",
				"unicode": "e558"
			},
			{
				"id": "local_taxi",
				"unicode": "e559"
			},
			{
				"id": "location_city",
				"unicode": "e7f1"
			},
			{
				"id": "location_disabled",
				"unicode": "e1b6"
			},
			{
				"id": "location_off",
				"unicode": "e0c7"
			},
			{
				"id": "location_on",
				"unicode": "e0c8"
			},
			{
				"id": "location_searching",
				"unicode": "e1b7"
			},
			{
				"id": "lock",
				"unicode": "e897"
			},
			{
				"id": "lock_open",
				"unicode": "e898"
			},
			{
				"id": "lock_outline",
				"unicode": "e899"
			},
			{
				"id": "looks",
				"unicode": "e3fc"
			},
			{
				"id": "looks_3",
				"unicode": "e3fb"
			},
			{
				"id": "looks_4",
				"unicode": "e3fd"
			},
			{
				"id": "looks_5",
				"unicode": "e3fe"
			},
			{
				"id": "looks_6",
				"unicode": "e3ff"
			},
			{
				"id": "looks_one",
				"unicode": "e400"
			},
			{
				"id": "looks_two",
				"unicode": "e401"
			},
			{
				"id": "loop",
				"unicode": "e028"
			},
			{
				"id": "loupe",
				"unicode": "e402"
			},
			{
				"id": "low_priority",
				"unicode": "e16d"
			},
			{
				"id": "loyalty",
				"unicode": "e89a"
			},
			{
				"id": "mail",
				"unicode": "e158"
			},
			{
				"id": "mail_outline",
				"unicode": "e0e1"
			},
			{
				"id": "map",
				"unicode": "e55b"
			},
			{
				"id": "markunread",
				"unicode": "e159"
			},
			{
				"id": "markunread_mailbox",
				"unicode": "e89b"
			},
			{
				"id": "memory",
				"unicode": "e322"
			},
			{
				"id": "menu",
				"unicode": "e5d2"
			},
			{
				"id": "merge_type",
				"unicode": "e252"
			},
			{
				"id": "message",
				"unicode": "e0c9"
			},
			{
				"id": "mic",
				"unicode": "e029"
			},
			{
				"id": "mic_none",
				"unicode": "e02a"
			},
			{
				"id": "mic_off",
				"unicode": "e02b"
			},
			{
				"id": "mms",
				"unicode": "e618"
			},
			{
				"id": "mode_comment",
				"unicode": "e253"
			},
			{
				"id": "mode_edit",
				"unicode": "e254"
			},
			{
				"id": "monetization_on",
				"unicode": "e263"
			},
			{
				"id": "money_off",
				"unicode": "e25c"
			},
			{
				"id": "monochrome_photos",
				"unicode": "e403"
			},
			{
				"id": "mood",
				"unicode": "e7f2"
			},
			{
				"id": "mood_bad",
				"unicode": "e7f3"
			},
			{
				"id": "more",
				"unicode": "e619"
			},
			{
				"id": "more_horiz",
				"unicode": "e5d3"
			},
			{
				"id": "more_vert",
				"unicode": "e5d4"
			},
			{
				"id": "motorcycle",
				"unicode": "e91b"
			},
			{
				"id": "mouse",
				"unicode": "e323"
			},
			{
				"id": "move_to_inbox",
				"unicode": "e168"
			},
			{
				"id": "movie",
				"unicode": "e02c"
			},
			{
				"id": "movie_creation",
				"unicode": "e404"
			},
			{
				"id": "movie_filter",
				"unicode": "e43a"
			},
			{
				"id": "multiline_chart",
				"unicode": "e6df"
			},
			{
				"id": "music_note",
				"unicode": "e405"
			},
			{
				"id": "music_video",
				"unicode": "e063"
			},
			{
				"id": "my_location",
				"unicode": "e55c"
			},
			{
				"id": "nature",
				"unicode": "e406"
			},
			{
				"id": "nature_people",
				"unicode": "e407"
			},
			{
				"id": "navigate_before",
				"unicode": "e408"
			},
			{
				"id": "navigate_next",
				"unicode": "e409"
			},
			{
				"id": "navigation",
				"unicode": "e55d"
			},
			{
				"id": "near_me",
				"unicode": "e569"
			},
			{
				"id": "network_cell",
				"unicode": "e1b9"
			},
			{
				"id": "network_check",
				"unicode": "e640"
			},
			{
				"id": "network_locked",
				"unicode": "e61a"
			},
			{
				"id": "network_wifi",
				"unicode": "e1ba"
			},
			{
				"id": "new_releases",
				"unicode": "e031"
			},
			{
				"id": "next_week",
				"unicode": "e16a"
			},
			{
				"id": "nfc",
				"unicode": "e1bb"
			},
			{
				"id": "no_encryption",
				"unicode": "e641"
			},
			{
				"id": "no_sim",
				"unicode": "e0cc"
			},
			{
				"id": "not_interested",
				"unicode": "e033"
			},
			{
				"id": "note",
				"unicode": "e06f"
			},
			{
				"id": "note_add",
				"unicode": "e89c"
			},
			{
				"id": "notifications",
				"unicode": "e7f4"
			},
			{
				"id": "notifications_active",
				"unicode": "e7f7"
			},
			{
				"id": "notifications_none",
				"unicode": "e7f5"
			},
			{
				"id": "notifications_off",
				"unicode": "e7f6"
			},
			{
				"id": "notifications_paused",
				"unicode": "e7f8"
			},
			{
				"id": "offline_pin",
				"unicode": "e90a"
			},
			{
				"id": "ondemand_video",
				"unicode": "e63a"
			},
			{
				"id": "opacity",
				"unicode": "e91c"
			},
			{
				"id": "open_in_browser",
				"unicode": "e89d"
			},
			{
				"id": "open_in_new",
				"unicode": "e89e"
			},
			{
				"id": "open_with",
				"unicode": "e89f"
			},
			{
				"id": "pages",
				"unicode": "e7f9"
			},
			{
				"id": "pageview",
				"unicode": "e8a0"
			},
			{
				"id": "palette",
				"unicode": "e40a"
			},
			{
				"id": "pan_tool",
				"unicode": "e925"
			},
			{
				"id": "panorama",
				"unicode": "e40b"
			},
			{
				"id": "panorama_fish_eye",
				"unicode": "e40c"
			},
			{
				"id": "panorama_horizontal",
				"unicode": "e40d"
			},
			{
				"id": "panorama_vertical",
				"unicode": "e40e"
			},
			{
				"id": "panorama_wide_angle",
				"unicode": "e40f"
			},
			{
				"id": "party_mode",
				"unicode": "e7fa"
			},
			{
				"id": "pause",
				"unicode": "e034"
			},
			{
				"id": "pause_circle_filled",
				"unicode": "e035"
			},
			{
				"id": "pause_circle_outline",
				"unicode": "e036"
			},
			{
				"id": "payment",
				"unicode": "e8a1"
			},
			{
				"id": "people",
				"unicode": "e7fb"
			},
			{
				"id": "people_outline",
				"unicode": "e7fc"
			},
			{
				"id": "perm_camera_mic",
				"unicode": "e8a2"
			},
			{
				"id": "perm_contact_calendar",
				"unicode": "e8a3"
			},
			{
				"id": "perm_data_setting",
				"unicode": "e8a4"
			},
			{
				"id": "perm_device_information",
				"unicode": "e8a5"
			},
			{
				"id": "perm_identity",
				"unicode": "e8a6"
			},
			{
				"id": "perm_media",
				"unicode": "e8a7"
			},
			{
				"id": "perm_phone_msg",
				"unicode": "e8a8"
			},
			{
				"id": "perm_scan_wifi",
				"unicode": "e8a9"
			},
			{
				"id": "person",
				"unicode": "e7fd"
			},
			{
				"id": "person_add",
				"unicode": "e7fe"
			},
			{
				"id": "person_outline",
				"unicode": "e7ff"
			},
			{
				"id": "person_pin",
				"unicode": "e55a"
			},
			{
				"id": "person_pin_circle",
				"unicode": "e56a"
			},
			{
				"id": "personal_video",
				"unicode": "e63b"
			},
			{
				"id": "pets",
				"unicode": "e91d"
			},
			{
				"id": "phone",
				"unicode": "e0cd"
			},
			{
				"id": "phone_android",
				"unicode": "e324"
			},
			{
				"id": "phone_bluetooth_speaker",
				"unicode": "e61b"
			},
			{
				"id": "phone_forwarded",
				"unicode": "e61c"
			},
			{
				"id": "phone_in_talk",
				"unicode": "e61d"
			},
			{
				"id": "phone_iphone",
				"unicode": "e325"
			},
			{
				"id": "phone_locked",
				"unicode": "e61e"
			},
			{
				"id": "phone_missed",
				"unicode": "e61f"
			},
			{
				"id": "phone_paused",
				"unicode": "e620"
			},
			{
				"id": "phonelink",
				"unicode": "e326"
			},
			{
				"id": "phonelink_erase",
				"unicode": "e0db"
			},
			{
				"id": "phonelink_lock",
				"unicode": "e0dc"
			},
			{
				"id": "phonelink_off",
				"unicode": "e327"
			},
			{
				"id": "phonelink_ring",
				"unicode": "e0dd"
			},
			{
				"id": "phonelink_setup",
				"unicode": "e0de"
			},
			{
				"id": "photo",
				"unicode": "e410"
			},
			{
				"id": "photo_album",
				"unicode": "e411"
			},
			{
				"id": "photo_camera",
				"unicode": "e412"
			},
			{
				"id": "photo_filter",
				"unicode": "e43b"
			},
			{
				"id": "photo_library",
				"unicode": "e413"
			},
			{
				"id": "photo_size_select_actual",
				"unicode": "e432"
			},
			{
				"id": "photo_size_select_large",
				"unicode": "e433"
			},
			{
				"id": "photo_size_select_small",
				"unicode": "e434"
			},
			{
				"id": "picture_as_pdf",
				"unicode": "e415"
			},
			{
				"id": "picture_in_picture",
				"unicode": "e8aa"
			},
			{
				"id": "picture_in_picture_alt",
				"unicode": "e911"
			},
			{
				"id": "pie_chart",
				"unicode": "e6c4"
			},
			{
				"id": "pie_chart_outlined",
				"unicode": "e6c5"
			},
			{
				"id": "pin_drop",
				"unicode": "e55e"
			},
			{
				"id": "place",
				"unicode": "e55f"
			},
			{
				"id": "play_arrow",
				"unicode": "e037"
			},
			{
				"id": "play_circle_filled",
				"unicode": "e038"
			},
			{
				"id": "play_circle_outline",
				"unicode": "e039"
			},
			{
				"id": "play_for_work",
				"unicode": "e906"
			},
			{
				"id": "playlist_add",
				"unicode": "e03b"
			},
			{
				"id": "playlist_add_check",
				"unicode": "e065"
			},
			{
				"id": "playlist_play",
				"unicode": "e05f"
			},
			{
				"id": "plus_one",
				"unicode": "e800"
			},
			{
				"id": "poll",
				"unicode": "e801"
			},
			{
				"id": "polymer",
				"unicode": "e8ab"
			},
			{
				"id": "pool",
				"unicode": "eb48"
			},
			{
				"id": "portable_wifi_off",
				"unicode": "e0ce"
			},
			{
				"id": "portrait",
				"unicode": "e416"
			},
			{
				"id": "power",
				"unicode": "e63c"
			},
			{
				"id": "power_input",
				"unicode": "e336"
			},
			{
				"id": "power_settings_new",
				"unicode": "e8ac"
			},
			{
				"id": "pregnant_woman",
				"unicode": "e91e"
			},
			{
				"id": "present_to_all",
				"unicode": "e0df"
			},
			{
				"id": "print",
				"unicode": "e8ad"
			},
			{
				"id": "priority_high",
				"unicode": "e645"
			},
			{
				"id": "public",
				"unicode": "e80b"
			},
			{
				"id": "publish",
				"unicode": "e255"
			},
			{
				"id": "query_builder",
				"unicode": "e8ae"
			},
			{
				"id": "question_answer",
				"unicode": "e8af"
			},
			{
				"id": "queue",
				"unicode": "e03c"
			},
			{
				"id": "queue_music",
				"unicode": "e03d"
			},
			{
				"id": "queue_play_next",
				"unicode": "e066"
			},
			{
				"id": "radio",
				"unicode": "e03e"
			},
			{
				"id": "radio_button_checked",
				"unicode": "e837"
			},
			{
				"id": "radio_button_unchecked",
				"unicode": "e836"
			},
			{
				"id": "rate_review",
				"unicode": "e560"
			},
			{
				"id": "receipt",
				"unicode": "e8b0"
			},
			{
				"id": "recent_actors",
				"unicode": "e03f"
			},
			{
				"id": "record_voice_over",
				"unicode": "e91f"
			},
			{
				"id": "redeem",
				"unicode": "e8b1"
			},
			{
				"id": "redo",
				"unicode": "e15a"
			},
			{
				"id": "refresh",
				"unicode": "e5d5"
			},
			{
				"id": "remove",
				"unicode": "e15b"
			},
			{
				"id": "remove_circle",
				"unicode": "e15c"
			},
			{
				"id": "remove_circle_outline",
				"unicode": "e15d"
			},
			{
				"id": "remove_from_queue",
				"unicode": "e067"
			},
			{
				"id": "remove_red_eye",
				"unicode": "e417"
			},
			{
				"id": "remove_shopping_cart",
				"unicode": "e928"
			},
			{
				"id": "reorder",
				"unicode": "e8fe"
			},
			{
				"id": "repeat",
				"unicode": "e040"
			},
			{
				"id": "repeat_one",
				"unicode": "e041"
			},
			{
				"id": "replay",
				"unicode": "e042"
			},
			{
				"id": "replay_10",
				"unicode": "e059"
			},
			{
				"id": "replay_30",
				"unicode": "e05a"
			},
			{
				"id": "replay_5",
				"unicode": "e05b"
			},
			{
				"id": "reply",
				"unicode": "e15e"
			},
			{
				"id": "reply_all",
				"unicode": "e15f"
			},
			{
				"id": "report",
				"unicode": "e160"
			},
			{
				"id": "report_problem",
				"unicode": "e8b2"
			},
			{
				"id": "restaurant",
				"unicode": "e56c"
			},
			{
				"id": "restaurant_menu",
				"unicode": "e561"
			},
			{
				"id": "restore",
				"unicode": "e8b3"
			},
			{
				"id": "restore_page",
				"unicode": "e929"
			},
			{
				"id": "ring_volume",
				"unicode": "e0d1"
			},
			{
				"id": "room",
				"unicode": "e8b4"
			},
			{
				"id": "room_service",
				"unicode": "eb49"
			},
			{
				"id": "rotate_90_degrees_ccw",
				"unicode": "e418"
			},
			{
				"id": "rotate_left",
				"unicode": "e419"
			},
			{
				"id": "rotate_right",
				"unicode": "e41a"
			},
			{
				"id": "rounded_corner",
				"unicode": "e920"
			},
			{
				"id": "router",
				"unicode": "e328"
			},
			{
				"id": "rowing",
				"unicode": "e921"
			},
			{
				"id": "rss_feed",
				"unicode": "e0e5"
			},
			{
				"id": "rv_hookup",
				"unicode": "e642"
			},
			{
				"id": "satellite",
				"unicode": "e562"
			},
			{
				"id": "save",
				"unicode": "e161"
			},
			{
				"id": "scanner",
				"unicode": "e329"
			},
			{
				"id": "schedule",
				"unicode": "e8b5"
			},
			{
				"id": "school",
				"unicode": "e80c"
			},
			{
				"id": "screen_lock_landscape",
				"unicode": "e1be"
			},
			{
				"id": "screen_lock_portrait",
				"unicode": "e1bf"
			},
			{
				"id": "screen_lock_rotation",
				"unicode": "e1c0"
			},
			{
				"id": "screen_rotation",
				"unicode": "e1c1"
			},
			{
				"id": "screen_share",
				"unicode": "e0e2"
			},
			{
				"id": "sd_card",
				"unicode": "e623"
			},
			{
				"id": "sd_storage",
				"unicode": "e1c2"
			},
			{
				"id": "search",
				"unicode": "e8b6"
			},
			{
				"id": "security",
				"unicode": "e32a"
			},
			{
				"id": "select_all",
				"unicode": "e162"
			},
			{
				"id": "send",
				"unicode": "e163"
			},
			{
				"id": "sentiment_dissatisfied",
				"unicode": "e811"
			},
			{
				"id": "sentiment_neutral",
				"unicode": "e812"
			},
			{
				"id": "sentiment_satisfied",
				"unicode": "e813"
			},
			{
				"id": "sentiment_very_dissatisfied",
				"unicode": "e814"
			},
			{
				"id": "sentiment_very_satisfied",
				"unicode": "e815"
			},
			{
				"id": "settings",
				"unicode": "e8b8"
			},
			{
				"id": "settings_applications",
				"unicode": "e8b9"
			},
			{
				"id": "settings_backup_restore",
				"unicode": "e8ba"
			},
			{
				"id": "settings_bluetooth",
				"unicode": "e8bb"
			},
			{
				"id": "settings_brightness",
				"unicode": "e8bd"
			},
			{
				"id": "settings_cell",
				"unicode": "e8bc"
			},
			{
				"id": "settings_ethernet",
				"unicode": "e8be"
			},
			{
				"id": "settings_input_antenna",
				"unicode": "e8bf"
			},
			{
				"id": "settings_input_component",
				"unicode": "e8c0"
			},
			{
				"id": "settings_input_composite",
				"unicode": "e8c1"
			},
			{
				"id": "settings_input_hdmi",
				"unicode": "e8c2"
			},
			{
				"id": "settings_input_svideo",
				"unicode": "e8c3"
			},
			{
				"id": "settings_overscan",
				"unicode": "e8c4"
			},
			{
				"id": "settings_phone",
				"unicode": "e8c5"
			},
			{
				"id": "settings_power",
				"unicode": "e8c6"
			},
			{
				"id": "settings_remote",
				"unicode": "e8c7"
			},
			{
				"id": "settings_system_daydream",
				"unicode": "e1c3"
			},
			{
				"id": "settings_voice",
				"unicode": "e8c8"
			},
			{
				"id": "share",
				"unicode": "e80d"
			},
			{
				"id": "shop",
				"unicode": "e8c9"
			},
			{
				"id": "shop_two",
				"unicode": "e8ca"
			},
			{
				"id": "shopping_basket",
				"unicode": "e8cb"
			},
			{
				"id": "shopping_cart",
				"unicode": "e8cc"
			},
			{
				"id": "short_text",
				"unicode": "e261"
			},
			{
				"id": "show_chart",
				"unicode": "e6e1"
			},
			{
				"id": "shuffle",
				"unicode": "e043"
			},
			{
				"id": "signal_cellular_4_bar",
				"unicode": "e1c8"
			},
			{
				"id": "signal_cellular_connected_no_internet_4_bar",
				"unicode": "e1cd"
			},
			{
				"id": "signal_cellular_no_sim",
				"unicode": "e1ce"
			},
			{
				"id": "signal_cellular_null",
				"unicode": "e1cf"
			},
			{
				"id": "signal_cellular_off",
				"unicode": "e1d0"
			},
			{
				"id": "signal_wifi_4_bar",
				"unicode": "e1d8"
			},
			{
				"id": "signal_wifi_4_bar_lock",
				"unicode": "e1d9"
			},
			{
				"id": "signal_wifi_off",
				"unicode": "e1da"
			},
			{
				"id": "sim_card",
				"unicode": "e32b"
			},
			{
				"id": "sim_card_alert",
				"unicode": "e624"
			},
			{
				"id": "skip_next",
				"unicode": "e044"
			},
			{
				"id": "skip_previous",
				"unicode": "e045"
			},
			{
				"id": "slideshow",
				"unicode": "e41b"
			},
			{
				"id": "slow_motion_video",
				"unicode": "e068"
			},
			{
				"id": "smartphone",
				"unicode": "e32c"
			},
			{
				"id": "smoke_free",
				"unicode": "eb4a"
			},
			{
				"id": "smoking_rooms",
				"unicode": "eb4b"
			},
			{
				"id": "sms",
				"unicode": "e625"
			},
			{
				"id": "sms_failed",
				"unicode": "e626"
			},
			{
				"id": "snooze",
				"unicode": "e046"
			},
			{
				"id": "sort",
				"unicode": "e164"
			},
			{
				"id": "sort_by_alpha",
				"unicode": "e053"
			},
			{
				"id": "spa",
				"unicode": "eb4c"
			},
			{
				"id": "space_bar",
				"unicode": "e256"
			},
			{
				"id": "speaker",
				"unicode": "e32d"
			},
			{
				"id": "speaker_group",
				"unicode": "e32e"
			},
			{
				"id": "speaker_notes",
				"unicode": "e8cd"
			},
			{
				"id": "speaker_notes_off",
				"unicode": "e92a"
			},
			{
				"id": "speaker_phone",
				"unicode": "e0d2"
			},
			{
				"id": "spellcheck",
				"unicode": "e8ce"
			},
			{
				"id": "star",
				"unicode": "e838"
			},
			{
				"id": "star_border",
				"unicode": "e83a"
			},
			{
				"id": "star_half",
				"unicode": "e839"
			},
			{
				"id": "stars",
				"unicode": "e8d0"
			},
			{
				"id": "stay_current_landscape",
				"unicode": "e0d3"
			},
			{
				"id": "stay_current_portrait",
				"unicode": "e0d4"
			},
			{
				"id": "stay_primary_landscape",
				"unicode": "e0d5"
			},
			{
				"id": "stay_primary_portrait",
				"unicode": "e0d6"
			},
			{
				"id": "stop",
				"unicode": "e047"
			},
			{
				"id": "stop_screen_share",
				"unicode": "e0e3"
			},
			{
				"id": "storage",
				"unicode": "e1db"
			},
			{
				"id": "store",
				"unicode": "e8d1"
			},
			{
				"id": "store_mall_directory",
				"unicode": "e563"
			},
			{
				"id": "straighten",
				"unicode": "e41c"
			},
			{
				"id": "streetview",
				"unicode": "e56e"
			},
			{
				"id": "strikethrough_s",
				"unicode": "e257"
			},
			{
				"id": "style",
				"unicode": "e41d"
			},
			{
				"id": "subdirectory_arrow_left",
				"unicode": "e5d9"
			},
			{
				"id": "subdirectory_arrow_right",
				"unicode": "e5da"
			},
			{
				"id": "subject",
				"unicode": "e8d2"
			},
			{
				"id": "subscriptions",
				"unicode": "e064"
			},
			{
				"id": "subtitles",
				"unicode": "e048"
			},
			{
				"id": "subway",
				"unicode": "e56f"
			},
			{
				"id": "supervisor_account",
				"unicode": "e8d3"
			},
			{
				"id": "surround_sound",
				"unicode": "e049"
			},
			{
				"id": "swap_calls",
				"unicode": "e0d7"
			},
			{
				"id": "swap_horiz",
				"unicode": "e8d4"
			},
			{
				"id": "swap_vert",
				"unicode": "e8d5"
			},
			{
				"id": "swap_vertical_circle",
				"unicode": "e8d6"
			},
			{
				"id": "switch_camera",
				"unicode": "e41e"
			},
			{
				"id": "switch_video",
				"unicode": "e41f"
			},
			{
				"id": "sync",
				"unicode": "e627"
			},
			{
				"id": "sync_disabled",
				"unicode": "e628"
			},
			{
				"id": "sync_problem",
				"unicode": "e629"
			},
			{
				"id": "system_update",
				"unicode": "e62a"
			},
			{
				"id": "system_update_alt",
				"unicode": "e8d7"
			},
			{
				"id": "tab",
				"unicode": "e8d8"
			},
			{
				"id": "tab_unselected",
				"unicode": "e8d9"
			},
			{
				"id": "tablet",
				"unicode": "e32f"
			},
			{
				"id": "tablet_android",
				"unicode": "e330"
			},
			{
				"id": "tablet_mac",
				"unicode": "e331"
			},
			{
				"id": "tag_faces",
				"unicode": "e420"
			},
			{
				"id": "tap_and_play",
				"unicode": "e62b"
			},
			{
				"id": "terrain",
				"unicode": "e564"
			},
			{
				"id": "text_fields",
				"unicode": "e262"
			},
			{
				"id": "text_format",
				"unicode": "e165"
			},
			{
				"id": "textsms",
				"unicode": "e0d8"
			},
			{
				"id": "texture",
				"unicode": "e421"
			},
			{
				"id": "theaters",
				"unicode": "e8da"
			},
			{
				"id": "thumb_down",
				"unicode": "e8db"
			},
			{
				"id": "thumb_up",
				"unicode": "e8dc"
			},
			{
				"id": "thumbs_up_down",
				"unicode": "e8dd"
			},
			{
				"id": "time_to_leave",
				"unicode": "e62c"
			},
			{
				"id": "timelapse",
				"unicode": "e422"
			},
			{
				"id": "timeline",
				"unicode": "e922"
			},
			{
				"id": "timer",
				"unicode": "e425"
			},
			{
				"id": "timer_10",
				"unicode": "e423"
			},
			{
				"id": "timer_3",
				"unicode": "e424"
			},
			{
				"id": "timer_off",
				"unicode": "e426"
			},
			{
				"id": "title",
				"unicode": "e264"
			},
			{
				"id": "toc",
				"unicode": "e8de"
			},
			{
				"id": "today",
				"unicode": "e8df"
			},
			{
				"id": "toll",
				"unicode": "e8e0"
			},
			{
				"id": "tonality",
				"unicode": "e427"
			},
			{
				"id": "touch_app",
				"unicode": "e913"
			},
			{
				"id": "toys",
				"unicode": "e332"
			},
			{
				"id": "track_changes",
				"unicode": "e8e1"
			},
			{
				"id": "traffic",
				"unicode": "e565"
			},
			{
				"id": "train",
				"unicode": "e570"
			},
			{
				"id": "tram",
				"unicode": "e571"
			},
			{
				"id": "transfer_within_a_station",
				"unicode": "e572"
			},
			{
				"id": "transform",
				"unicode": "e428"
			},
			{
				"id": "translate",
				"unicode": "e8e2"
			},
			{
				"id": "trending_down",
				"unicode": "e8e3"
			},
			{
				"id": "trending_flat",
				"unicode": "e8e4"
			},
			{
				"id": "trending_up",
				"unicode": "e8e5"
			},
			{
				"id": "tune",
				"unicode": "e429"
			},
			{
				"id": "turned_in",
				"unicode": "e8e6"
			},
			{
				"id": "turned_in_not",
				"unicode": "e8e7"
			},
			{
				"id": "tv",
				"unicode": "e333"
			},
			{
				"id": "unarchive",
				"unicode": "e169"
			},
			{
				"id": "undo",
				"unicode": "e166"
			},
			{
				"id": "unfold_less",
				"unicode": "e5d6"
			},
			{
				"id": "unfold_more",
				"unicode": "e5d7"
			},
			{
				"id": "update",
				"unicode": "e923"
			},
			{
				"id": "usb",
				"unicode": "e1e0"
			},
			{
				"id": "verified_user",
				"unicode": "e8e8"
			},
			{
				"id": "vertical_align_bottom",
				"unicode": "e258"
			},
			{
				"id": "vertical_align_center",
				"unicode": "e259"
			},
			{
				"id": "vertical_align_top",
				"unicode": "e25a"
			},
			{
				"id": "vibration",
				"unicode": "e62d"
			},
			{
				"id": "video_call",
				"unicode": "e070"
			},
			{
				"id": "video_label",
				"unicode": "e071"
			},
			{
				"id": "video_library",
				"unicode": "e04a"
			},
			{
				"id": "videocam",
				"unicode": "e04b"
			},
			{
				"id": "videocam_off",
				"unicode": "e04c"
			},
			{
				"id": "videogame_asset",
				"unicode": "e338"
			},
			{
				"id": "view_agenda",
				"unicode": "e8e9"
			},
			{
				"id": "view_array",
				"unicode": "e8ea"
			},
			{
				"id": "view_carousel",
				"unicode": "e8eb"
			},
			{
				"id": "view_column",
				"unicode": "e8ec"
			},
			{
				"id": "view_comfy",
				"unicode": "e42a"
			},
			{
				"id": "view_compact",
				"unicode": "e42b"
			},
			{
				"id": "view_day",
				"unicode": "e8ed"
			},
			{
				"id": "view_headline",
				"unicode": "e8ee"
			},
			{
				"id": "view_list",
				"unicode": "e8ef"
			},
			{
				"id": "view_module",
				"unicode": "e8f0"
			},
			{
				"id": "view_quilt",
				"unicode": "e8f1"
			},
			{
				"id": "view_stream",
				"unicode": "e8f2"
			},
			{
				"id": "view_week",
				"unicode": "e8f3"
			},
			{
				"id": "vignette",
				"unicode": "e435"
			},
			{
				"id": "visibility",
				"unicode": "e8f4"
			},
			{
				"id": "visibility_off",
				"unicode": "e8f5"
			},
			{
				"id": "voice_chat",
				"unicode": "e62e"
			},
			{
				"id": "voicemail",
				"unicode": "e0d9"
			},
			{
				"id": "volume_down",
				"unicode": "e04d"
			},
			{
				"id": "volume_mute",
				"unicode": "e04e"
			},
			{
				"id": "volume_off",
				"unicode": "e04f"
			},
			{
				"id": "volume_up",
				"unicode": "e050"
			},
			{
				"id": "vpn_key",
				"unicode": "e0da"
			},
			{
				"id": "vpn_lock",
				"unicode": "e62f"
			},
			{
				"id": "wallpaper",
				"unicode": "e1bc"
			},
			{
				"id": "warning",
				"unicode": "e002"
			},
			{
				"id": "watch",
				"unicode": "e334"
			},
			{
				"id": "watch_later",
				"unicode": "e924"
			},
			{
				"id": "wb_auto",
				"unicode": "e42c"
			},
			{
				"id": "wb_cloudy",
				"unicode": "e42d"
			},
			{
				"id": "wb_incandescent",
				"unicode": "e42e"
			},
			{
				"id": "wb_iridescent",
				"unicode": "e436"
			},
			{
				"id": "wb_sunny",
				"unicode": "e430"
			},
			{
				"id": "wc",
				"unicode": "e63d"
			},
			{
				"id": "web",
				"unicode": "e051"
			},
			{
				"id": "web_asset",
				"unicode": "e069"
			},
			{
				"id": "weekend",
				"unicode": "e16b"
			},
			{
				"id": "whatshot",
				"unicode": "e80e"
			},
			{
				"id": "widgets",
				"unicode": "e1bd"
			},
			{
				"id": "wifi",
				"unicode": "e63e"
			},
			{
				"id": "wifi_lock",
				"unicode": "e1e1"
			},
			{
				"id": "wifi_tethering",
				"unicode": "e1e2"
			},
			{
				"id": "work",
				"unicode": "e8f9"
			},
			{
				"id": "wrap_text",
				"unicode": "e25b"
			},
			{
				"id": "youtube_searched_for",
				"unicode": "e8fa"
			},
			{
				"id": "zoom_in",
				"unicode": "e8ff"
			},
			{
				"id": "zoom_out",
				"unicode": "e900"
			},
			{
				"id": "zoom_out_map",
				"unicode": "e56b"
			}
		]
	};

/***/ }
/******/ ]);