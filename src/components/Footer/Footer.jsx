import React from 'react';
import style from './Footer.module.scss';
import classNames from 'classnames';

function Footer() {
    return (
        <footer className={style.Footer}>
            <div className={classNames('container', 'row')}>
                <div className={'col-10'}>
                    <p>Products</p>
                    <ul className={style.productsList}>
                        <li><a href="/en/products/market-intelligence/tmm/">Transport Market Monitor</a></li>
                        <li><a href="/en/products/sourcing/tendering/">Ticontract Tendering</a></li>
                        <li><a href="/en/products/sourcing/spot-tendering/">Spot Tendering</a></li>
                        <li><a href="/en/products/sourcing/carrier-database/">Carrier Database</a></li>
                        <li><a href="/en/products/business-development/carrier-premium-account/">Carrier Premium Account</a></li>
                        <li><a href="/en/products/sourcing/rate-management/">Rate Management</a></li>
                        <li><a href="/en/products/transport-assignment/">Transport Assignment</a></li>
                        <li><a href="/en/products/management/time-slot-management/">Time Slot Management</a></li>
                        <li><a href="/en/products/management/time-slot-management-retail/">Time Slot Management for Retail</a></li>
                        <li><a href="/en/products/management/yard-management-retail/">Yard Management</a></li>
                        <li><a href="/en/products/tracking/real-time-visibility-by-sixfold/">Real Time Visibility by Sixfold</a></li>
                        <li><a href="/en/products/tracking/transport-visibility/">Transport Visibility</a></li>
                        <li><a href="/en/products/tracking/real-time-workflow-and-documents/">Real Time Workflow &amp; Documents</a></li>
                        <li><a href="/en/products/controlling/billing/">Billing</a></li>
                        <li><a href="/en/products/controlling/reporting-retail/">Reporting</a></li>
                        <li><a href="/en/products/controlling/surcharge-management/">Surcharge Management</a></li>
                        <li><a href="/en/products/connectivity/erp-interfaces/">ERP Interfaces</a></li>
                        <li><a href="/en/products/connectivity/erp-interfaces/sap/">SAP Interface</a></li>
                        <li><a href="/en/products/connectivity/erp-interfaces/sap-addon/">Add-on for SAP</a></li>
                        <li><a href="/en/products/connectivity/erp-interfaces/oracle/">Oracle Interface</a></li>
                        <li><a href="/en/products/connectivity/carrier-interfaces/">Carrier Interfaces</a></li>
                    </ul>
                </div>
                <div className="col-2">
                    <p>About Us</p>
                    <ul>
                        <li><a href="/en/platform/">Platform</a></li>
                        <li><a href="/en/your-advantages/">Your Advantages</a></li>
                        <li><a href="/en/expertise/">Expertise</a></li>
                        <li><a href="/en/expertise/blog/">Blog</a></li>
                        <li><a href="/en/expertise/case-studies/">Case Studies</a></li>
                        <li><a href="/en/about-us/news-and-events/">News &amp; Events</a></li>
                        <li><a href="/en/career/">Career</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;