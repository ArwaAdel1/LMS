import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FolderOpen, Brain, CreditCard, type LucideIcon } from 'lucide-react';
import { Button, Card } from '@/components/ui';
import { mockTenant } from '@/mocks/tenant';

interface Feature {
  key: 'content' | 'ai' | 'payments';
  icon: LucideIcon;
}

const features: Feature[] = [
  { key: 'content', icon: FolderOpen },
  { key: 'ai', icon: Brain },
  { key: 'payments', icon: CreditCard },
];

export function LandingPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-16">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 py-12 text-center">
        <span className="rounded-full bg-accent/10 px-4 py-1 font-cairo text-sm font-medium text-accent">
          {mockTenant.name}
        </span>
        <h1 className="max-w-3xl font-cairo text-4xl font-extrabold leading-tight text-text-primary md:text-5xl">
          {t('landing:hero.headline')}
        </h1>
        <p className="max-w-2xl font-cairo text-lg text-text-secondary">
          {t('landing:hero.subheadline')}
        </p>
        <Button size="lg" onClick={() => navigate('/auth')}>
          {t('landing:hero.cta')}
        </Button>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {features.map(({ key, icon: Icon }) => (
          <Card key={key} padding="lg" className="flex flex-col items-center gap-3 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-card bg-accent/10">
              <Icon size={24} className="text-accent" />
            </div>
            <h3 className="font-cairo text-lg font-semibold text-text-primary">
              {t(`landing:features.${key}.title`)}
            </h3>
            <p className="font-cairo text-sm text-text-secondary">
              {t(`landing:features.${key}.desc`)}
            </p>
          </Card>
        ))}
      </section>
    </div>
  );
}
