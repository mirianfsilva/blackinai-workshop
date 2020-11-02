import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Card, CardContent, Button, Avatar, Link} from '@material-ui/core/';
import Typography from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// images 
import charles from './../../assets/img/team/charles.jpeg';
import flora from './../../assets/img/team/flora.jpeg';
import foutse from './../../assets/img/team/foutse.jpg';
import ignatius from './../../assets/img/team/ignatius.jpg';
import nwamaka from './../../assets/img/team/nwamaka.jpg';
import salomey from './../../assets/img/team/salomey.jpg';
import tobi from './../../assets/img/team/tobi.jpg';
import victor from './../../assets/img/team/victor.jpg';
import mirian from './../../assets/img/team/mirian.png';
import krystal from './../../assets/img/team/krystal.png';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.light,
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(10),
        display: 'flex',
        position: 'relative',
    },
    more: {
        marginTop: theme.spacing(5),
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        padding: theme.spacing(0, 5),
    },
    avatarSize: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    icon: {
        alignItems: 'left',
        padding: theme.spacing(1),
        color: theme.palette.primary.dark,
    },
    card: {
        height: '350px',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(8),
    },
    cardtwo: {
        height: '420px',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(5),
    },
});

const teamlist = [
    {
        image: charles,
        title: 'Charles Earl', 
        subtitle: 'Automattic.com',
        bio: 'Charles Earl currently lives near Atlanta, Georgia (US) and works at Automattic.com -- the company behind WordPress and tumblr -- as a data scientist. He is passionate about building technology that is transparent, equitable, and just. Charles grew up in Atlanta and is a graduate of Morehouse College, Georgia Tech, UC Berkeley, and the University of Chicago.',
        icon_1: <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/>,
        // icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>,
        link_1: 'https://www.linkedin.com/in/charlescearl6299/'
    },
    {
        image: victor,
        title: 'Victor Silva',
        subtitle: 'University of Alberta',
        bio: 'Victor Silva (He/Him) is a PhD student in Computing Science at the University of Alberta under supervision of Eleni Stroulia and Joerg Sander. His interest lies broadly in the field of Artificial Intelligence with focus on Data Mining. He is originally from Brazil and identifies himself as multi-racial.',
        icon_1: <FontAwesomeIcon icon={["fa", "link"]} size="2x"/>,
        // icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>,
        link_1: 'https://webdocs.cs.ualberta.ca/~vsilva/',
    },
    {
        image: ignatius,
        title: 'Ignatius Ezeani', 
        subtitle: 'Lancaster University, UK',
        bio: 'Ignatius is a Senior Teaching/Research Associate with the Data Science Group at Lancaster University. He\'s interested in the application of NLP techniques in building resources for low-resource languages especially African languages, but his interests span other related areas like corpus linguistics, distributional semantics, machine learning, deep neural models and general AI',
        icon_1: <FontAwesomeIcon icon={["fa", "link"]} size="2x"/>,
        // icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />,
        link_1:  'https://www.lancaster.ac.uk/scc/about-us/people/ignatius-ezeani',
    },
];

const secondList = [
    {
        image: flora,
        title: 'Flora Tasse', 
        subtitle: 'Streem Inc',
        bio: 'Flora is the Head of CV/AR at Streem. She specialises in AI applied to Computer Graphics and Vision problems faced in AR/VR. Her team at Streem is making the mobile phone\'s camera more intelligent, by building AI agents that can understand images/videos and augment them with relevant interactive virtual content. She joined Streem, after it acquires her startup Selerio, which was spun out of her PhD work at Cambridge University.  At Cambridge, Flora research focused on 3D shape retrieval using different query types such as 3D models, images/sketches and range scans. This work was awarded the 2013 Google Doctoral Fellowship in Computer Graphics and published in various top-tier venues, including ICCV and SIGGRAPH Asia. She served on several international program committees such as ICML, ICLR and Eurographics. Notably she was Paper Chair of the 2019 Black in AI workshop, co-located with NeurIPS. She was recently named one of the Rework Top 30 UK Women in AI and appeared on Computer Weekly Most Influential women in UK Tech longlist.',
        icon_1: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>,
        // icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>,
        link_1: 'https://twitter.com/ftasse',
    },
    {
        image: tobi,
        title: 'Tobi Olatunji', 
        subtitle: 'enlitic.com',
        bio: 'Tobi, an unusual mix of doctor and scientist, transitioned out of a full-time clinical role to focus on building intelligent applications for clinical care because it became clear that clinician-led engineering had the potential to transform the entire health system at a scale far greater than a number of clinic visits. Gradual but thoughtful context-driven changes would lead to millions of lives saved, happier patients, clinicians, and a healthier health system overall. Tobi has a Bachelor of Medicine, Bachelor of Surgery (MBBS) degree from the College of Medicine, University of Ibadan; a Master of Science in Medical Informatics from the University of San Francisco, and currently leads Clinical Natural Language Processing at Enlitic, an artificial intelligence startup in San Francisco, California. His passion for building healthcare in his home country, Nigeria, is focused on developing technology infrastructure for successful digital transitions in large public hospitals.',
        icon_1: <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/>,
        // icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />,
        link_1: 'https://www.linkedin.com/in/tobi-olatunji-md',
    },
    {
        image: salomey,
        title: 'Salomey Osei', 
        subtitle: 'African Masters of Machine Intelligence (AMMI)',
        bio: 'Salomey Osei holds a Bachelor, a Master of Philosophy (Submitted Thesis) in Applied Mathematics from the Kwame Nkrumah University of Science and Technology (KNUST) and an Msc in Industrial Mathematics from the African Institute for Mathematical Science. She is wrapping up her thesis on ML with applications to Finance with the African Masters of Machine Intelligence sponsored by Google and Facebook. She is also a recipient of the MasterCard Foundation Scholarship among others. She is a team lead for Ghana NLP and a co-organizer for the Women in Machine Learning and Data Science(WiMLDS) Accra chapter. She is interested in leveraging her interest in machine learning in the field of finance and also to help bring African languages to the NLP map. She is passionate about mentoring students, especially females in STEM and her long term goal is to share her knowledge with others by lecturing.',
        icon_1: <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/>,
        // icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />,
        link_1: 'https://www.linkedin.com/in/salomey-osei-4b08a5b8/',
    },
    {
        image: nwamaka,
        title: 'Nwamaka Okafor', 
        subtitle: 'University College Dublin',
        bio: 'Nwamaka Okafor is currently a PhD Student in the School of Electrical and Electronic Engineering, University College Dublin. Her research is supported by Schlumberger and TETFUND-Nigeria and is focused on the application of IoTs and AI in ecological sensing. She works under the supervision of Prof. Declan Delaney on the EPA funded SmartBog research project on Irish peatlands where she develops and deploys cost-effective IoT systems and AI solutions to corroborate remote and satellite-based surveillance. Nwamaka holds a masters degree in Computer Forensics and Cyber Security with Distinction from the University of Greenwich, London. She is also a mentor and Judge in Technovation Girls and a member of the Elsevier\'s Advisory Panel. She is a receipient of several awards including the Google Women Techmaker Award, ACM Student Research Competition Award, Young Researcher, Heidelberg Laureate Forum and so on. Nwamaka is also a lecturer in the department of Computer Science, Federal Polytechnic Nekede Nigeria and she is married with children.',
        icon_1: <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/>,
        // icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>,
        link_1: 'https://www.linkedin.com/in/amaka-okafor',
    },
];

const thirdList = [
    {
        image: foutse,
        title: 'Foutse Yuehgoh', 
        subtitle: 'Coexel',
        bio: 'Foutse is a Machine learning researcher, Co-founder of WPSYG association, who likes to volunteer on data science-related projects. She holds 2 master\'s degrees one in Machine learning and Big data from the African Institute for mathematical sciences (AIMS) and the other in information and data processing from the University of Paris Saclay, France. She is currently a Data Analyst at Coexel, France. She uses NLP to optimise news search and recommendations.',
        icon_1: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>,
        // icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>,
        link_1: 'https://twitter.com/yuehgoh',
    },
    {
        image: mirian,
        title: 'Mírian Silva', 
        subtitle: 'IBM',
        bio: '(She/Her) Currently Software Engineer at IBM Brazil. Also Instructor and creator of Guided Projects on Coursera. B.S. Degree in Computational Mathematics @ Federal University of Minas Gerais, Brazil. Interested in AI/ML, Optimization and Computational Biology. Completely involved in actions that promote women in STEM and Founder of Girls Support Girls Community in Belo Horizonte, Brazil. Black in AI Workshop 2020 collaborator volunteer.',
        icon_1: <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/>,
        //icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>,
        link_1: 'https://www.linkedin.com/in/mirianfsilva/',
    },
    {
        image: krystal,
        title: 'Krystal Maughan', 
        subtitle: 'University of Vermont',
        bio: 'Krystal is a second year PhD student at the University of Vermont, where she is reaching Provable fairness, privacy and machine learning. She is an active member of Black in AI and has previously served as co-organizer for the lunch at Black in AI at AAAI and the Black in AI at ACL social.',
        icon_1: <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/>,
        //icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>,
        link_1: 'https://www.linkedin.com/in/krystal-maughan-3563a215/',
    },
];

function TeamMembers(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h2" marked="center" align="center" component="h2">
                            Black in AI 2020 Workshop Organizers
                        </Typography>
                    </Grid>
                    {teamlist.map((tile) => (
                        <Grid item xs={12} md={4}>
                            <Avatar alt={tile.title} src={tile.image} className={classes.avatarSize} />
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.title} variant="h6" gutterBottom>
                                        {tile.title}
                                    </Typography>
                                    <Typography variant="body1" component="h2">
                                        {tile.subtitle}
                                        <Grid container spacing={2} className={classes.icon} >
                                        <Grid md={2}>
                                            <Link className={classes.icon} href={tile.link_1}>{tile.icon_1}</Link>
                                        </Grid>
                                        <Grid md={2}>
                                            <Link className={classes.icon} href={tile.link_2}>{tile.icon_2}</Link>
                                        </Grid>
                                    </Grid>
                                    </Typography>
                                    <br></br>
                                    <Typography variant="body2" component="p">
                                        {tile.bio}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                    {secondList.map((tile) => (
                        <Grid item xs={12} md={6}>
                            <Avatar alt={tile.title} src={tile.image} className={classes.avatarSize} />
                            <Card className={classes.cardtwo}>
                                <CardContent>
                                    <Typography className={classes.title} variant="h6" gutterBottom>
                                        {tile.title}
                                    </Typography>
                                    <Typography variant="body1" component="h2">
                                        {tile.subtitle} 
                                        <Grid container spacing={2} className={classes.icon} >
                                        <Grid md={2}>
                                            <Link className={classes.icon} href={tile.link_1}>{tile.icon_1}</Link>
                                        </Grid>
                                        <Grid md={2}>
                                            <Link className={classes.icon} href={tile.link_2}>{tile.icon_2}</Link>
                                        </Grid>
                                    </Grid>
                                    </Typography>
                                    <br></br>
                                    <Typography variant="body2" component="p">
                                        {tile.bio}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                    {thirdList.map((tile) => (
                        <Grid item xs={12} md={4}>
                            <Avatar alt={tile.title} src={tile.image} className={classes.avatarSize} />
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.title} variant="h6" gutterBottom>
                                        {tile.title}
                                    </Typography>
                                    <Typography variant="body1" component="h2">
                                        {tile.subtitle}
                                        <Grid container spacing={2} className={classes.icon} >
                                        <Grid md={2}>
                                            <Link className={classes.icon} href={tile.link_1}>{tile.icon_1}</Link>
                                        </Grid>
                                        <Grid md={2}>
                                            <Link className={classes.icon} href={tile.link_2}>{tile.icon_2}</Link>
                                        </Grid>
                                    </Grid>
                                    </Typography>
                                    <br></br>
                                    <Typography variant="body2" component="p">
                                        {tile.bio}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

TeamMembers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamMembers);
