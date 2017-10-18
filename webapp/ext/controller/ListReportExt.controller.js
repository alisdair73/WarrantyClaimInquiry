sap.ui.controller("warranty_claim_inquiry.ext.controller.ListReportExt", {

    onInitSmartFilterBarExtension: function(oEvent){
    	
    	var today = new Date();
    	var todayMinusOneYear = new Date();
    	todayMinusOneYear.setFullYear(today.getFullYear() - 1);
    	
		var customFilter = {"submittedDate":{
								"ranges":[{
									"exclude":false,
									"operation":"BT",
									"keyField":"submittedDate",
									"value1": todayMinusOneYear,
									"value2": today
								}],
								"items":[],
								"value":null
							}};
	    	
		oEvent.getSource().setFilterData(customFilter,true);
 
    },
        
	onPrintRCTI: function(event){
		
		var documentNumber = event.getParameter("item").getText();
	
	//	var warrantyClaimNumber = event.getSource().getParent().getBindingContext().getObject().claimNumber;
			
		sap.m.URLHelper.redirect("/sap/opu/odata/sap/ZWTY_WARRANTY_CLAIMS_SRV/DocumentSet(DocumentNumber='" + 
			documentNumber + "',DocumentType='RCTI')/$value", true);
	},

	onPrintTAG: function(oEvent){
		var warrantyClaimNumber = oEvent.getSource().getParent().getBindingContext().getObject().claimNumber;
			
		sap.m.URLHelper.redirect("/sap/opu/odata/sap/ZWTY_WARRANTY_CLAIMS_SRV/DocumentSet(DocumentNumber='" +
			+ warrantyClaimNumber + "',DocumentType='TAG')/$value", true);
	},
	
	onShowRCTIDocuments: function(event){

		// create menu only once
		 if (!this._RCTIMenu) {
		 	this._RCTIMenu = sap.ui.xmlfragment("warranty_claim_inquiry.ext.fragment.RctiMenu", this);
		 	this.getView().addDependent(this._RCTIMenu);
		 }

		var path = event.getSource().getParent().getBindingContext().sPath + "/to_rcti";
		var oItemTemplate = new sap.m.MenuItem({
			"text" : "{companyCode}-{documentNumber}-{fiscalYear}",
			"icon" : "sap-icon://accounting-document-verification"
		});
  
		sap.ui.getCore().byId("RCTIMenu").bindItems(path, oItemTemplate);
		this._RCTIMenu.openBy(event.getSource());
	},
	
	onCloseRCTI: function(){
		this._rctiDialog.close();
	},
	
	onRCTIMenu: function(event){
		
	}
	
});