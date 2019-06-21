import { InjectionToken } from '@angular/core';
import { FirebaseConfig } from './firebase-config.model';

export const LickyLoginConfigService = new InjectionToken<FirebaseConfig>("FirebaseConfig");
