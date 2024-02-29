import React from 'react';
import styled from 'styled-components';

const AchievementContainer = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  text-align: center;
`;

const AchievementTitle = styled.h2`
  margin-bottom: 2rem;
  color: #333;
  font-size: 2rem;
`;

const AchievementList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const AchievementColumn = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 0 1rem;
`;

const AchievementItem = styled.div`
  margin-bottom: 1rem;
  text-align: left;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const AchievementIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 1.5rem;
`;

const AchievementText = styled.span`
  color: #555;
`;

const Achievements = () => {
  const linkedInURL = 'https://www.linkedin.com/';
  return (
    <AchievementContainer>
      <AchievementTitle>My Achievements</AchievementTitle>
      <AchievementList>
        <AchievementColumn>
          <AchievementItem>
            <AchievementIcon>🏆</AchievementIcon>
            <AchievementText>First Place in Coding Competition</AchievementText>
          </AchievementItem>
          <AchievementItem>
            <AchievementIcon>🎓</AchievementIcon>
            <AchievementText>Graduated with Honors</AchievementText>
          </AchievementItem>
          <AchievementItem>
            <AchievementIcon>🏅</AchievementIcon>
            <AchievementText>Volunteer of the Year Award</AchievementText>
          </AchievementItem>
        </AchievementColumn>
        <AchievementColumn>
          <AchievementItem>
            <AchievementIcon>🎉</AchievementIcon>
            <AchievementText>Microsoft Learn Student Ambassador</AchievementText>
          </AchievementItem>
          <AchievementItem>
            <AchievementIcon>🏆</AchievementIcon>
            <AchievementText>Participated in Microsoft Imagine Cup 2024</AchievementText>
          </AchievementItem>
        </AchievementColumn>
        <AchievementColumn>
          <AchievementItem>
            <AchievementIcon>👥</AchievementIcon>
            <AchievementText>Led a successful team project to completion</AchievementText>
          </AchievementItem>
          <AchievementItem>
            <AchievementIcon>🤝</AchievementIcon>
            <AchievementText>Organized a successful charity event with MCN</AchievementText>
          </AchievementItem>
        </AchievementColumn>
        <AchievementColumn>
          <AchievementItem>
            <AchievementIcon>💻</AchievementIcon>
            <AchievementText>Built a coding/programming community through my YouTube Channel</AchievementText>
          </AchievementItem>
        </AchievementColumn>
      </AchievementList>
    </AchievementContainer>
  );
};

export default Achievements;
