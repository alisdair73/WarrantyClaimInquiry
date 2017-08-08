sap.ui.controller("warranty_claim_inquiry.ext.controller.ListReportExt", {

	onPrintRCTI: function(oEvent){
		var warrantyClaimNumber = oEvent.getSource().getParent().getBindingContext().getObject().claimNumber;
			
		sap.m.URLHelper.redirect("/sap/opu/odata/sap/ZWTY_WARRANTY_CLAIMS_SRV/DocumentSet(ClaimNumber='" +
			+ warrantyClaimNumber + "',DocumentType='RCTI')/$value", true);
	},

	onPrintTAG: function(oEvent){
		var warrantyClaimNumber = oEvent.getSource().getParent().getBindingContext().getObject().claimNumber;
			
		sap.m.URLHelper.redirect("/sap/opu/odata/sap/ZWTY_WARRANTY_CLAIMS_SRV/DocumentSet(ClaimNumber='" +
			+ warrantyClaimNumber + "',DocumentType='TAG')/$value", true);
	},
	
	onRCTIMenu: function(event){
		
	}
	
});