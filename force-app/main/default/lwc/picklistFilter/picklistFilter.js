import { LightningElement, track, wire} from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import getAccountsByIndustry from '@salesforce/apex/PicklistFilterController.getAccountsByIndustry';
//name and type as columns in the datatable
const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Type', fieldName: 'Type' }
];

export default class PicklistFilter extends LightningElement {
    @track value = '';
    @track data = [];
    @track columns = columns;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;

    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD})
    IndustryPicklistValues;

    handleChange(event) {
        this.value = event.detail.value;
    }

    @wire(getAccountsByIndustry, { industry : '$value' })
    accountsByIndustryCallback({error,data}){
        this.data = data;
    }
}