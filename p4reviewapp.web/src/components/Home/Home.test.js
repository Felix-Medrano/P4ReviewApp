import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

// Mocks simples
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key, // Devuelve la key como texto para simplificar
  }),
}));

jest.mock('../../assets/images/home/homeBanner.webp', () => 'test-banner.jpg');

jest.mock('./Home.module.css', () => ({
  home: 'home',
  hero: 'hero',
  bannerImage: 'bannerImage',
  heroContent: 'heroContent',
  features: 'features',
  featuresTitle: 'featuresTitle',
  multilineText: 'multilineText',
  cards: 'cards',
  card: 'card',
}));

describe('Home Component', () => {
  it('renders main sections', () => {
    render(<Home />);
    
    // Verificar elementos principales
    expect(screen.getByAltText('Banner')).toBeInTheDocument();
    expect(screen.getByText('homeHeroTitle')).toBeInTheDocument();
    expect(screen.getByText('homeKeyFeaturesSlogan')).toBeInTheDocument();
    
    // Verificar que hay cards
    expect(screen.getByText('cardOneTitle')).toBeInTheDocument();
    expect(screen.getByText('cardTwoTitle')).toBeInTheDocument();
    expect(screen.getByText('cardThreeTitle')).toBeInTheDocument();
  });

  it('has correct image attributes', () => {
    render(<Home />);
    
    const image = screen.getByAltText('Banner');
    expect(image).toHaveAttribute('src', 'test-banner.jpg');
  });
});