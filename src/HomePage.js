import React from "react";
import Hero from "./Hero";

import yaba from "./img/hero-yaba-small.jpg";

export default function HomePage(props) {
	return (
		<React.Fragment>
			<Hero
				img={yaba}
				heading="Lorem ipsum dolor"
				description="Nam molestie nec tortor. Donec placerat leo sit amet velit. Vestibulum id justo ut vitae massa. Proin in dolor mauris consequat aliquam. Donec ipsum, vestibulum ullamcorper venenatis augue."
			/>
		</React.Fragment>
	);
}
