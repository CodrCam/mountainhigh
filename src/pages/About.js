import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
    margin: 20px;
    font-family: Arial, sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ProfilePic = styled.img`
    max-width: 200px;
    border-radius: 50%;
    margin-bottom: 20px;
`;

const Title = styled.h1`
    color: #333;
    width: 100%;
    text-align: center;
`;

const Content = styled.p`
    color: #555;
    line-height: 1.6;
    flex: 1;
    margin-right: 20px;
`;

const Section = styled.div`
    margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
    color: #444;
`;

const SkillList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const SkillItem = styled.li`
    margin-bottom: 10px;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const ListItem = styled.li`
    margin-bottom: 10px;
`;

function About() {
    return (
        <AboutWrapper>
            <Title>About Cameron Griffin</Title>

            <ProfilePic src="/Media/Photos/Profile.jpg" alt="Cameron Griffin" />


            <Section>
                <SectionTitle>Background</SectionTitle>
                <Content>
                    A lifelong resident of Washington, Cameron has seamlessly transitioned from serving with the Marines into diverse roles across the tech field, outdoor guidance, and media production. He's currently making waves as a producer for the Avalanche Hour podcast. Cameron's residence in the Forest Ridge community signifies his connection and commitment.
                </Content>
            </Section>

            <Section>
                <SectionTitle>Skills & Experiences</SectionTitle>
                <SkillList>
                    <SkillItem><strong>Multimedia Production:</strong> Expertise in Adobe Creative Suite.</SkillItem>
                    <SkillItem><strong>Content Creation:</strong> Producer and editor for The Avalanche Hour Podcast.</SkillItem>
                    <SkillItem><strong>Technical Acumen:</strong> Proficiency in multiple programming languages.</SkillItem>
                    <SkillItem><strong>Social Media & Web Presence:</strong> Experience from roles like Data Analyst at Facebook.</SkillItem>
                    <SkillItem><strong>Event Management:</strong> Managed events at CrossFit Tukwila.</SkillItem>
                    <SkillItem><strong>Communication & Collaboration:</strong> Proven in roles at various platforms.</SkillItem>
                    <SkillItem><strong>Flexibility & Availability:</strong> Adaptable to varied schedules.</SkillItem>
                </SkillList>
            </Section>

            <Section>
                <SectionTitle>Certifications and Qualifications</SectionTitle>
                <List>
                    <ListItem>AMGA Single Pitch Instructor - American Alpine Institute - 2021</ListItem>
                    <ListItem>Technical Rope Rescue Technician - American Alpine Institute - 2020</ListItem>
                    <ListItem>AIARE 1 - Seattle Mountaineers Foothills - 2019</ListItem>
                    <ListItem>Avalanche Rescue - American Alpine Institute - 2020</ListItem>
                    <ListItem>Leave No Trace Trainer - American Alpine Institute - 2021</ListItem>
                    <ListItem>Wilderness First Responder and CPR Certified - Remote Medical Institute - 2021</ListItem>
                </List>
            </Section>

            <Section>
                <SectionTitle>Affiliations</SectionTitle>
                <List>
                    <ListItem>AMGA Professional Member 2019 - Present</ListItem>
                    <ListItem>American Alpine Club Member 2021 - Present</ListItem>
                </List>
            </Section>

        </AboutWrapper>
    );
}

export default About;
