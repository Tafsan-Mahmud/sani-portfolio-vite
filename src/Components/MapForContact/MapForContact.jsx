import React from 'react';

const MapForContact = () => {
    return (
        <div>
            <div className="map">
                <iframe style={{width:'100%',height:'450px', border:'0',background:'#222'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29520.593383283056!2d90.3208350004067!3d22.35082800901406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aac6e230bac8b9%3A0x1f9b13667ec84621!2sPatuakhali%20New%20Market!5e0!3m2!1sen!2sbd!4v1628883850613!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default MapForContact;