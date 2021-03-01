// dst27's FF user.js

user_pref("browser.contentblocking.category", "standard");
user_pref("browser.ctrlTab.recentlyUsedOrder", false);
user_pref("browser.download.autohideButton", false);
user_pref("browser.download.panel.shown", true);
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.loadDivertedInBackground", true);
user_pref("browser.toolbars.bookmarks.visibility", "never");
user_pref("browser.uidensity", 1);
user_pref("devtools.theme", "dark");
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// MS Edge smooth scrolling personality (using msdPhysics) [customized by dst27]
// https://www.reddit.com/r/firefox/comments/bvfqtp/these_are_the_smooth_scrolling_tweaks_i_play/eppxp4p?context=3
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 250);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 1300);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 1100);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 50);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 1.5);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 15000);
user_pref("mousewheel.min_line_scroll_amount", 20);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);

// Get rid of menu bar and alt key annoyance
user_pref("ui.key.menuAccessKey", 0);
user_pref("ui.key.menuAccessKeyFocuses", false);

/****************************************************************************
 * BetterFox (modified by dst27)                                            *
 * version: 21 February 2021 (dst27)                                        *
 * url: https://github.com/yokoffing/Better-Fox                             *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
user_pref("javascript.options.warp", true); // Not available in v85.0.2
user_pref("dom.image-lazy-loading.enabled", true);
user_pref("browser.sessionstore.restore_tabs_lazily", true);
user_pref("browser.sessionstore.restore_on_demand", false); // Modified to false
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", false);
user_pref("browser.startup.preXulSkeletonUI", false);
user_pref("network.manage-offline-status", false); // Added
user_pref("gfx.canvas.remote", false); // Added, def = true, reddit.com/r/firefox/comments/lqimww/_/gogpnke/

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/

/*** PRELOADING ***/
user_pref("network.dns.disablePrefetch", false); // Modified to false
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("network.prefetch-next", true); // Modified to true
user_pref("network.http.speculative-parallel-limit", 6);
user_pref("network.preload", true);
user_pref("network.predictor.enabled", true);
user_pref("network.predictor.enable-hover-on-ssl", true);
user_pref("network.predictor.enable-prefetch", true); // Modified to true
user_pref("browser.newtab.preload", true);

/** HTTPS-ONLY MODE ***/
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);
user_pref("dom.security.https_only_mode.upgrade_local", true);

/** DNS-over-HTTPS (DOH) ***/
user_pref("network.trr.send_user-agent_headers", false);
user_pref("network.dns.skipTRR-when-parental-control-enabled", false);

/** TELEMETRY ***/
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("corroborator.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("default-browser-agent.enabled", false);
user_pref("extensions.abuseReport.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/

/** MOZILLA UI ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
// user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
// user_pref("identity.fxaccounts.enabled", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("security.dialog_enable_delay", 0);
user_pref("extensions.webextensions.restrictedDomains", "accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,api.accounts.firefox.com,content.cdn.mozilla.net,discovery.addons.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com");

/** WARNINGS ***/
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.aboutConfig.showWarning", false);

/** FULLSCREEN ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1); // Might want to change val to something >0
user_pref("full-screen-api.warning.timeout", -1); // Might want to change val to 0

/** NEW TAB PAGE ***/
user_pref("browser.startup.page", 3);
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

/*** POCKET ***/
user_pref("extensions.pocket.enabled", false); // Remove section to use Pocket
user_pref("extensions.pocket.api"," ");
user_pref("extensions.pocket.oAuthConsumerKey", " ");
user_pref("extensions.pocket.site", " ");

/** DOWNLOADS ***/
user_pref("browser.download.useDownloadDir", true); // Modified to true
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.hide_plugins_without_extensions", false);

/** VARIOUS ***/
user_pref("browser.tabs.unloadOnLowMemory", false);
user_pref("browser.urlbar.suggest.engines", false); // Might change to true
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("dom.push.enabled", true); // Modified to true
user_pref("dom.push.userAgentID", "");
user_pref("media.autoplay.default", 1);
user_pref("media.block-autoplay-until-in-foreground", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.spellcheckDefault", 2);
user_pref("accessibility.force_disabled", 1);
user_pref("browser.display.show_image_placeholders", false);
user_pref("view_source.wrap_long_lines", true);
user_pref("devtools.debugger.ui.editor-wrapping", true);

/** PDF ***/
user_pref("pdfjs.disabled", false);
user_pref("browser.helperApps.showOpenOptionForPdfJS", true);

/** TAB BEHAVIOR ***/
user_pref("dom.disable_window_move_resize", true);
user_pref("image.avif.enabled", true);
user_pref("editor.truncate_user_pastes", false);
user_pref("clipboard.plainTextOnly", true);
user_pref("dom.popup_allowed_events", "click dblclick");
user_pref("dom.disable_open_during_load", true); // Enable pop-up blocker 
user_pref("privacy.popups.showBrowserMessage", true);


// Performance settings, may introduce instability on some hardware
user_pref("gfx.webrender.all", true);
user_pref("webgl.force-enabled", true);
user_pref("layers.acceleration.force-enabled", true);
user_pref("layers.offmainthreadcomposition.enabled", true);
user_pref("layers.offmainthreadcomposition.async-animations", true)
user_pref("html5.offmainthread", true)
