import { IconType } from 'react-icons';
import {
    SiAmazonaws as AwsIcon,
    SiCss3 as CssIcon,
    SiDocker as DockerIcon,
    SiExpress as ExpressIcon,
    SiHtml5 as HtmlIcon,
    SiJavascript as JavaScriptIcon,
    SiJest as JestIcon,
    SiMysql as MySqlIcon,
    SiNextdotjs as NextJsIcon,
    SiNodedotjs as NodeIcon,
    SiOkta as OktaIcon,
    SiPostgresql as PostgreSqlIcon,
    SiReact as ReactIcon,
    SiTestinglibrary as TestingLibraryIcon,
    SiTypescript as TypeScriptIcon,
} from 'react-icons/si';

const icons: { [key: string]: IconType } = {
    node: NodeIcon,
    express: ExpressIcon,
    postgresql: PostgreSqlIcon,
    mysql: MySqlIcon,
    js: JavaScriptIcon,
    ts: TypeScriptIcon,
    react: ReactIcon,
    html: HtmlIcon,
    css: CssIcon,
    next: NextJsIcon,
    jest: JestIcon,
    testinglibrary: TestingLibraryIcon,
    aws: AwsIcon,
    docker: DockerIcon,
    okta: OktaIcon,
};

export default icons;
