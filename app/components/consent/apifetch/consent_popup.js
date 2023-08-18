import { StyleSheet, TouchableOpacity, Text, View, Modal,ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

import Icon from 'react-native-vector-icons/AntDesign'
import HTMLView from 'react-native-htmlview';
import AppStyles from '../../../style';

const ConsentPopup = ({ label = '', title = 'My dropdown' }) => {
    const [show_dropdown_modal, set_show_dropdown_modal] = useState(false)
    let [consent_data, set_consent_data] = useState({})

    // useEffect(() => {
    //     set_show_dropdown_modal(true)
    // }, [])

    useEffect(() => {
        setTimeout(() => { 
            set_consent_data(api_responce.loanPurposeTemplateList[0].description)
         }, 500)
    }, [])

    return (
        <View>
            <Text style={[{ color: 'blue',fontSize:16 }]} onPress={() => {
                console.log('welcome to consent popup');
                set_show_dropdown_modal(true)
            }}>
                {label}</Text>

            <Modal
                animationType="slide"
                transparent={true}
                visible={show_dropdown_modal}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    set_show_dropdown_modal(!show_dropdown_modal);
                }}>
                <View style={{ flex: 1,minHeight:400, width: '100%', justifyContent: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
                    <View style={{ margin:16,flex:1, alignSelf: 'center', backgroundColor: '#FFF', borderRadius: 8, justifyContent: 'center', alignItems: 'center', padding: 12 }}>
                       
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 20, width: 20 }} />
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 12 }}> {label}</Text>
                                </View>
                                <Icon
                                    onPress={() => set_show_dropdown_modal(false)}
                                    name='closecircleo' size={20} color={'red'} />
                            </View>
                            <ScrollView>
                            <HTMLView
                                value={consent_data}
                                stylesheet={styles}
                            />
                        </ScrollView>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ConsentPopup

const styles = StyleSheet.create({
    a: {
        fontWeight: '300',
        color: '#FF3366', // make links coloured pink
    },
});

const api_responce = {
    "loanPurposeTemplateList": [
        {
            "name": "Privacy Policy",
            "type": "PRIVACY_POLICY_CONSENT",
            "description": "<p>We, as a Bank, are committed in protecting your privacy when you use our Digital Platforms. In this Privacy Policy &ldquo;Bank&rdquo; / &ldquo;we&rdquo; / &ldquo;our&rdquo; means &ldquo;Bank of India&rdquo;, its subsidiaries and internal/external service providers&rdquo;<br />AND<br />&ldquo;You&rdquo; or &ldquo;Your&rdquo; means &ldquo;Customer&rdquo; who visits or access to the ePlatform.<br />AND<br />&ldquo;ePlatform(s)&rdquo; means Bank&rsquo;s mobile friendly applications, online services and other ePlatform such as Payment Gateways and POS devices.<br />Types of Data we collect on our ePlatform &ndash;<br />\"Anonymous information\" such information that cannot be used to identify an individual. Information like your Internet browser, IP address, information collected through tracking technologies, demographic information that you provide to us and aggregated or de-identified data.<br />&ldquo;Device Information&rdquo; means unique device identifier such as IMEI number, contact lists (in some cases), technical Data about your computer and mobile device.<br />\"Personal Identification data\" refers to data that defines identity of an individual/entity such as name as per any ID proof, Current/Permanent Address, personal/office address, email address, telephone/mobile number, domicile, category, nationality, PAN/Voter/Driving license/Passport number, date of birth, Gender, marital status, your father&rsquo;s name, spouse&rsquo;s name and mother&rsquo;s name, Employment or Business detail etc or any account information. Reason for collecting these data is as follows:<br />To manage our relationship with you;<br />To inform you about important information, changes in terms and conditions and policies and/or other administrative information<br />To personalize ePlatform journey<br />To deliver personalized marketing communications<br />To offer you our products or services which you like to avail<br />To perform activities such as data analysis, audits, usage trends to determine the effectiveness of our campaigns and to enhance the efficiency of our ePlatform.<br />To perform our obligations under KYC norms e.g. sharing your information with third parties to verify details you have provided to us like your identity, to authenticate you and verify your information;<br />To improve risk control for fraud detection and prevention, to comply with laws and regulations, and to comply with other legal processes and law enforcement requirements;<br />To prevent and/or to detect crime including fraud and financial crime, e.g. financing for terrorism and human trafficking (not restricted to);<br />For system or product development and planning, audit and administrative purposes;<br />To enter into a contract with you or to take steps pursuant to your request prior to entering into a contract.<br />To meet the legitimate interests to be pursued by us and/or by a third party.<br />\"Location information\" means information that may be collected by certain mobile applications or web browser that identifies your digital footprint location.<br />&ldquo;Biometric information&rdquo; means information such as your fingerprint/Iris that you choose to provide to us for any authentication and for fraud prevention purposes with your explicit consent. We don&rsquo;t store any biometric information, footprint anywhere in our database.<br />Generation and storing password or PIN in encrypted form based on your request on the ePlatform;<br />Records of correspondence and other communications between us, including email, telephone conversations, live chat, instant messages and social media communications containing information concerning your grievances, complaints and disputes.<br />We share the information/data with subsidiaries and/or affiliates as an effort to provide you improved services across the products and services, which are permissible under relevant laws and regulations; With third-party service providers, vendors, data processors and/or agents who perform services for us and help us to operate our business; Other companies to enable you to avail co-branded services, products or programs; Other third parties to comply with legal requirements such as the demands of applicable warrants, court orders; to verify or enforce our terms of use, our other rights, or other applicable policies; to address fraud, security or technical issues; to respond to an emergency; or otherwise to protect the rights, property or security of our customers and /or third parties. Statutory and regulatory bodies and authorities including but not limited to the Reserve Bank of India or the Securities and Exchange Board of India (including central and local government) and law enforcement authorities and entities or persons, to whom or before whom it is mandatory to disclose the Personal Data as per the applicable law, rules and regulations, orders of courts, judicial and quasi-judicial authorities and tribunals, arbitrators and arbitration tribunal.<br />By using and / or accessing our ePlatform and /or by agreeing to transact with us, you agree to the above sharing of information during your relationship with us<br />We may retain your Personal Data for as long as required for dealing with any concerns due which may arise due to any legal and /or regulatory requirements and /or for establishment, exercise or defence of legal claims, legitimate purposes for e.g. to help us to respond to queries or complaints, fighting fraud and financial crime, responding to requests from regulators, etc. If we don&rsquo;t need to retain information relating to any period of time, we may destroy, delete or anonymise such information.<br />Clicking on certain links within our ePlatforms may take you to other websites which may contain terms and conditions, privacy provisions, confidentiality provisions, or other provisions that differ from the terms and conditions applicable to our ePlatform. Links to other Internet services and websites are provided solely for the convenience of users and not an endorsement of any kind of the service or site, its content, or its sponsoring organization. The Bank takes no responsibility or liability whatsoever for the content, accuracy, reliability or opinions expressed in a website, to which our ePlatform are linked (a \"linked site\") and such linked sites are not monitored, investigated, or checked for accuracy or completeness by the Bank. It is your responsibility as the user to evaluate the accuracy, reliability, timeliness and completeness of any information available on a linked site and we shall not be responsible for the same at any circumstance . All products, services and content obtained from a linked site are provided \"as is\" without warranty of any kind, express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, security, or accuracy.<br />We use physical, technical, and procedural safeguards that comply with applicable legal standards to reasonably protect and secure your information from unauthorized access and use, alteration, and destruction. We seek to use reasonable organizational, technical, and administrative measures to protect Personal data within our organization. We require our staff and any third parties who carry out any work on our behalf to comply with appropriate compliance standards including obligations to protect any information and apply appropriate measures for the use and transfer of information.<br />\"Cookies\" are bits of electronic information that can transfer to your hard drive, mobile device, or other device to keep records of your use and /or visit to our ePlatform. We may use cookies to improve your experiences when visiting and /or using our ePlatform. We may use cookies to anonymously track interests, collect aggregate information, location tracking etc when you use and /or visit ePlatform. We do not use cookies to store or transmit any Personal Data.</p>",
            "code": "PRIVACY_POLICY_PL",
            "consentVersion": 3
        }
    ],
    "status": "SUCCESS",
    "code": "200",
    "message": "Consent fetched successfully."
}