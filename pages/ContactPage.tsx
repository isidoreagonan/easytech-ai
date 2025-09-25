
import React from 'react';
import MailIcon from '../components/icons/MailIcon';
import PhoneIcon from '../components/icons/PhoneIcon';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: <PhoneIcon className="h-8 w-8 text-yellow-400" />,
      title: "Téléphone",
      value: "+229 57 38 58 85",
      href: "tel:+22957385885"
    },
    {
      icon: <MailIcon className="h-8 w-8 text-yellow-400" />,
      title: "Email",
      value: "isidoreagonan@gmail.com",
      href: "mailto:isidoreagonan@gmail.com"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
        Contactez-nous
      </h1>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Pour toute question, suggestion ou proposition de collaboration, n'hésitez pas à nous contacter via les informations ci-dessous.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {contactInfo.map((info, index) => (
          <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-yellow-400 hover:scale-105">
            <div className="mb-4">
              {info.icon}
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">{info.title}</h2>
            <a href={info.href} className="text-gray-300 hover:text-yellow-400 transition-colors">
              {info.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
