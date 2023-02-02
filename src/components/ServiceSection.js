import React from "react";
import { GridLayout } from "../component/GridLayout";
import "./services-section.css";
import { ServiceItem } from "./../component/ServiceItem";

export const ServiceSection = () => {
  return (
    <div className=" service-container">
      <div className="container">
        <div className="section-title service-title">
          OUR DEDICATED SERVICES
        </div>
        <GridLayout>
          <ServiceItem />
          <ServiceItem
            iconClass="bi bi-bank"
            title="Banking Accounts"
            subtitle="Simplify how you manage your day-to-day finances with one of our flexible banking packages."
          />
          <ServiceItem
            iconClass="bi bi-buildings"
            title="Business Insurance"
            subtitle="We offer a wide range of underwriting and risk advisory services helping protect business assets, employees, public and money."
          />
          <ServiceItem
            iconClass="bi bi-car-front-fill"
            title="Car Insurance"
            subtitle="With our Comprehensive Car Insurance, enjoy 15% discount for women & men aged 45 and above. Get rewarded for safe driving."
          />
          <ServiceItem
            iconClass="bi bi-layout-text-window-reverse"
            title="Investment Management "
            subtitle="At Standard Credit Union, we understand your investment goals, and how to make your money work for you."
          />
          <a className="loan-link" href="/login">
            <ServiceItem
              iconClass="bi bi-house-gear-fill"
              title="Loans & Mortgages "
              subtitle="Our loans and mortgages solutions provide you with the right financing for all your needs."
            />
          </a>
          <ServiceItem
            iconClass="bi bi-people"
            title="Mutual Funds"
            subtitle="We offer a range of pooled mutual fund investment products for both individual and institutional investors."
          />
          <ServiceItem
            iconClass="bi bi-heart-pulse"
            title="Cash Management"
            subtitle="We offer a wide range of payment, payroll, reporting and liquidity management services."
          />
        </GridLayout>
      </div>
    </div>
  );
};
