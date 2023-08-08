import React from "react";

import * as ST from "../styled/styled";

interface Social {
	name: string;
	url: any;
}

interface SocialProps {
	social: Social[];
}

const SocialBtn: React.FC<SocialProps> = ({ social }) => {
	return (
		<>
			{social.map((socials: any) => (
				<ST.svg
					key={socials.id}
					dangerouslySetInnerHTML={{ __html: socials.url }}
				/>
			))}
		</>
	);
};

export default SocialBtn;
