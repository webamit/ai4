'use client';

// Chakra imports
import { Box, SimpleGrid } from '@chakra-ui/react';

import TemplateCard from '@/components/card/TemplateCard';

export default function Settings() {
  return (
    <Box mt={{ base: '70px', md: '0px', xl: '0px' }}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing="20px">
        <TemplateCard
          link="/essay"
          illustration="📝"
          name="Business Plan"
          description="Classic full plan with exec summary, market analysis, financials"
        />

        <TemplateCard
          link="/simplifier"
          illustration="📈"
          name="Marketing Plan"
          description="Step-by-step GTM strategy, audience targeting, and channels"
        />

        <TemplateCard
          link="/product-description"
          illustration="💰"
          name="Financial Forecast"
          description="1–3 year projections with revenue, cost, profit, and breakeven"
        />

        <TemplateCard
          link="/email-enhancer"
          illustration="🚀"
          name="Pitch Deck Slides"
          description="Custom slide content for investor presentations"
        />

        <TemplateCard
          link="/linkedin-message"
          illustration="🧾"
          name="Operating Agreement"
          description="AI-generated draft based on entity structure and ownership split"
        />

        <TemplateCard
          link="/caption"
          illustration="👥"
          name="Org Chart Builder"
          description="Simple tool that builds a visual org chart based on team input"
        />

        <TemplateCard
          link="/faq"
          illustration="📋"
          name="Hiring Plan"
          description="Suggested roles, job descriptions, salaries, and hiring timelines"
        />

        <TemplateCard
          link="/name-generator"
          illustration="🔐"
          name="NDA / Contract"
          description="Simple AI-assisted contract generator for basic business use"
        />

        <TemplateCard
          link="/review-responder"
          illustration="📊"
          name="Competitive Analysis"
          description="Table/grid + narrative based on known or submitted competitors"
        />

        <TemplateCard
          link="/business-generator"
          illustration="💼"
          name="Grant Application"
          description="Narrative, budget, and checklist for applying to common business grants"
        />


      </SimpleGrid>
    </Box>
  );
}
