// import React from "react";
import { Card, CardHeader, CardBody, Chip, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import propstype from "prop-types";

export default function ScreenSizeWarning({ userName = "User" }) {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                />
                <div className="flex flex-col">
                    <h1 className="text-2xl text-red-400 font-bold mb-2">Oups!! 😓</h1>
                    <p className="text-small text-default-500">Your account is available  </p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <span className="mb-2">But sorry <span className="
                        italic
                        font-medium
                        underline
                        decoration-sky-500/30
                        hover:text-blue-600
                        ">
                    {userName}
                </span>,
                    this game is not yet available on <span><Chip color="warning" variant="shadow"> mobile </Chip></span> devices.
                </span>
                <Divider className="mb-2" />

                <div>
                    <p>🚧 Its responsiveness is still under development.</p>
                    <p>👉 Change your device for a better experience.</p>
                </div>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link
                    isExternal
                    showAnchorIcon
                    href="https://www.linkedin.com/in/tanguy-leroy-k-youmbi-a02261206/"
                >
                    💡 Visit me on linkedIn.
                </Link>
            </CardFooter>
        </Card>
    );
}

ScreenSizeWarning.propTypes = {
    userName: propstype.string.isRequired,
};
