Ext.namespace('Zarafa.plugins.disableleaverequester');

/**
 * @class Zarafa.plugins.disableleaverequester.DisableLeaveRequesterPlugin
 * @extends Zarafa.core.Plugin
 *
*/
Zarafa.plugins.disableleaverequester.DisableLeaveRequesterPlugin  = Ext.extend(Zarafa.core.Plugin, {
    
    initPlugin : function() {
    	
    	Zarafa.core.Util.disableLeaveRequester();    	
    }
    
});

Zarafa.onReady(function() {
	container.registerPlugin(new Zarafa.core.PluginMetaData({
		name : 'disable_leave_requester',
		displayName : _('Disable Leave Requester'),
		allowUserDisable : true,
		allowUserVisible : true,
		pluginConstructor : Zarafa.plugins.disableleaverequester.DisableLeaveRequesterPlugin
	}));
});



