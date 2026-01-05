import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCards extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksConsultantSpotlight extends Struct.ComponentSchema {
  collectionName: 'components_blocks_consultant_spotlights';
  info: {
    displayName: 'consultantSpotlight';
  };
  attributes: {
    consultant: Schema.Attribute.Relation<
      'oneToOne',
      'api::consultant.consultant'
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksHeroWithBgImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_with_bg_images';
  info: {
    displayName: 'heroWithBgImage';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    lists: Schema.Attribute.Component<'elements.list', true>;
    subHeading: Schema.Attribute.String;
  };
}

export interface BlocksHeroWithBgVideo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_with_bg_videos';
  info: {
    displayName: 'heroWithBgVideo';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface BlocksRelatedPosts extends Struct.ComponentSchema {
  collectionName: 'components_blocks_related_posts';
  info: {
    displayName: 'relatedPosts';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface BlocksServiceOfferings extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_offerings';
  info: {
    displayName: 'serviceOfferings';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface BlocksTextWithSideImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_text_with_side_images';
  info: {
    displayName: 'textWithSideImage';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
    json: Schema.Attribute.JSON;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    IsExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsList extends Struct.ComponentSchema {
  collectionName: 'components_elements_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'index, follow'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.cards': BlocksCards;
      'blocks.consultant-spotlight': BlocksConsultantSpotlight;
      'blocks.cta': BlocksCta;
      'blocks.hero-with-bg-image': BlocksHeroWithBgImage;
      'blocks.hero-with-bg-video': BlocksHeroWithBgVideo;
      'blocks.related-posts': BlocksRelatedPosts;
      'blocks.service-offerings': BlocksServiceOfferings;
      'blocks.text-with-side-image': BlocksTextWithSideImage;
      'elements.card': ElementsCard;
      'elements.link': ElementsLink;
      'elements.list': ElementsList;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
